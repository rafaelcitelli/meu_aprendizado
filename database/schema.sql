-- WEB IO Store - schema base para Supabase/Postgres
-- Compatível com Auth + Postgres + Storage + políticas RLS.

create extension if not exists "pgcrypto";

create type public.user_role as enum ('customer', 'admin');
create type public.order_status as enum ('pending', 'approved', 'processing', 'posted', 'delivered', 'cancelled', 'refunded');
create type public.payment_status as enum ('pending', 'approved', 'refused', 'cancelled', 'refunded');
create type public.payment_method as enum ('pix', 'boleto', 'card');

create table if not exists public.user_profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  full_name text not null,
  phone text,
  cpf text,
  role public.user_role not null default 'customer',
  blocked boolean not null default false,
  preferences jsonb not null default '[]'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.addresses (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.user_profiles(id) on delete cascade,
  label text not null,
  recipient text not null,
  zip text not null,
  street text not null,
  number text not null,
  district text not null,
  city text not null,
  state text not null,
  is_primary boolean not null default false,
  created_at timestamptz not null default now()
);

create table if not exists public.categories (
  id uuid primary key default gen_random_uuid(),
  name text not null unique,
  slug text not null unique,
  icon text,
  description text,
  active boolean not null default true,
  created_at timestamptz not null default now()
);

create table if not exists public.products (
  id uuid primary key default gen_random_uuid(),
  category_id uuid references public.categories(id),
  name text not null,
  slug text not null unique,
  sku text not null unique,
  brand text,
  short_description text,
  description text,
  price numeric(12,2) not null,
  promotional_price numeric(12,2),
  stock integer not null default 0,
  featured boolean not null default false,
  best_seller boolean not null default false,
  active boolean not null default true,
  metadata jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.product_images (
  id uuid primary key default gen_random_uuid(),
  product_id uuid not null references public.products(id) on delete cascade,
  storage_path text not null,
  alt_text text,
  sort_order integer not null default 0,
  created_at timestamptz not null default now()
);

create table if not exists public.carts (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.user_profiles(id) on delete cascade,
  coupon_code text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique(user_id)
);

create table if not exists public.cart_items (
  id uuid primary key default gen_random_uuid(),
  cart_id uuid not null references public.carts(id) on delete cascade,
  product_id uuid not null references public.products(id),
  quantity integer not null check (quantity > 0),
  unit_price numeric(12,2) not null,
  created_at timestamptz not null default now(),
  unique(cart_id, product_id)
);

create table if not exists public.orders (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.user_profiles(id),
  address_id uuid references public.addresses(id),
  code text not null unique,
  status public.order_status not null default 'pending',
  payment_status public.payment_status not null default 'pending',
  payment_method public.payment_method not null,
  subtotal numeric(12,2) not null,
  shipping_total numeric(12,2) not null default 0,
  discount_total numeric(12,2) not null default 0,
  grand_total numeric(12,2) not null,
  coupon_code text,
  tracking_code text,
  metadata jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.order_items (
  id uuid primary key default gen_random_uuid(),
  order_id uuid not null references public.orders(id) on delete cascade,
  product_id uuid not null references public.products(id),
  quantity integer not null check (quantity > 0),
  unit_price numeric(12,2) not null,
  total_price numeric(12,2) generated always as (quantity * unit_price) stored
);

create table if not exists public.payments (
  id uuid primary key default gen_random_uuid(),
  order_id uuid not null references public.orders(id) on delete cascade,
  provider text not null,
  method public.payment_method not null,
  status public.payment_status not null default 'pending',
  provider_reference text,
  payload jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.coupons (
  id uuid primary key default gen_random_uuid(),
  code text not null unique,
  discount_type text not null,
  discount_value numeric(12,2) not null,
  minimum_amount numeric(12,2) not null default 0,
  active boolean not null default true,
  expires_at timestamptz
);

create table if not exists public.sales_reports (
  id uuid primary key default gen_random_uuid(),
  period_start date not null,
  period_end date not null,
  payload jsonb not null,
  created_at timestamptz not null default now()
);

create table if not exists public.admin_logs (
  id uuid primary key default gen_random_uuid(),
  admin_id uuid not null references public.user_profiles(id),
  action text not null,
  entity_type text,
  entity_id text,
  payload jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
);

create table if not exists public.order_status_history (
  id uuid primary key default gen_random_uuid(),
  order_id uuid not null references public.orders(id) on delete cascade,
  status public.order_status not null,
  note text,
  changed_by uuid references public.user_profiles(id),
  created_at timestamptz not null default now()
);

alter table public.user_profiles enable row level security;
alter table public.addresses enable row level security;
alter table public.carts enable row level security;
alter table public.cart_items enable row level security;
alter table public.orders enable row level security;
alter table public.order_items enable row level security;
alter table public.payments enable row level security;
alter table public.admin_logs enable row level security;

create policy "profiles are visible to owner"
  on public.user_profiles for select
  using (auth.uid() = id);

create policy "customers manage own addresses"
  on public.addresses for all
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

create policy "customers manage own carts"
  on public.carts for all
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

create policy "customers manage own cart items"
  on public.cart_items for all
  using (
    exists (
      select 1 from public.carts c
      where c.id = cart_id and c.user_id = auth.uid()
    )
  )
  with check (
    exists (
      select 1 from public.carts c
      where c.id = cart_id and c.user_id = auth.uid()
    )
  );

create policy "customers see own orders"
  on public.orders for select
  using (auth.uid() = user_id);

create policy "customers see own order items"
  on public.order_items for select
  using (
    exists (
      select 1 from public.orders o
      where o.id = order_id and o.user_id = auth.uid()
    )
  );

create policy "customers see own payments"
  on public.payments for select
  using (
    exists (
      select 1 from public.orders o
      where o.id = order_id and o.user_id = auth.uid()
    )
  );

create or replace function public.is_admin()
returns boolean
language sql
stable
as $$
  select exists (
    select 1 from public.user_profiles
    where id = auth.uid() and role = 'admin' and blocked = false
  );
$$;

create policy "admins manage profiles"
  on public.user_profiles for all
  using (public.is_admin())
  with check (public.is_admin());

create policy "admins manage orders"
  on public.orders for all
  using (public.is_admin())
  with check (public.is_admin());

create policy "admins manage payments"
  on public.payments for all
  using (public.is_admin())
  with check (public.is_admin());

create policy "admins manage logs"
  on public.admin_logs for all
  using (public.is_admin())
  with check (public.is_admin());

insert into public.categories (name, slug, icon, description)
values
  ('Tecnologia', 'tecnologia', '💻', 'Setup premium para produtividade e creators.'),
  ('Casa Inteligente', 'casa-inteligente', '🏠', 'Automação, sensores e conectividade.'),
  ('Gamer', 'gamer', '🎮', 'Periféricos de alta performance.'),
  ('Home Office', 'home-office', '🪑', 'Ergonomia, áudio e visão para performance.')
on conflict (slug) do nothing;

insert into public.coupons (code, discount_type, discount_value, minimum_amount, active)
values
  ('WEBIO10', 'percentage', 10, 500, true),
  ('FRETEGRATIS', 'shipping', 100, 1200, true)
on conflict (code) do nothing;
