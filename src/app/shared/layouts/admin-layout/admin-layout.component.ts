import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-admin-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  template: `
    <div class="admin-container">
      <aside class="admin-sidebar">
        <div class="brand">
          <h1>TrendyBox <span class="brand-sub">ADMIN</span></h1>
        </div>
        <nav class="admin-nav">
          <a routerLink="/admin/products" routerLinkActive="active" class="nav-item">
            QUẢN LÝ SẢN PHẨM
          </a>
          <a routerLink="/admin/categories" routerLinkActive="active" class="nav-item">
            QUẢN LÝ DANH MỤC
          </a>
          <a routerLink="/admin/user-management" routerLinkActive="active" class="nav-item">
            QUẢN LÝ NGƯỜI DÙNG
          </a>
        </nav>
      </aside>
      
      <main class="admin-main">
        <header class="admin-header">
           <div class="admin-profile">
              <span class="admin-name">ADMINISTRATOR</span>
              <div class="avatar"><i class="fa-solid fa-user"></i></div>
           </div>
        </header>
        <div class="admin-content">
          <router-outlet></router-outlet>
        </div>
      </main>
    </div>
  `,
  styles: [`
    .admin-container {
      display: flex;
      min-height: 100vh;
      background-color: var(--bg-color, #fefee5);
      font-family: 'Manrope', sans-serif;
    }

    .admin-sidebar {
      width: 250px;
      background-color: var(--bg-color, #fefee5);
      color: var(--text-primary);
      display: flex;
      flex-direction: column;
      border-right: 1px solid rgba(0,0,0,0.08); /* Minimalist separator */
    }

    .brand {
      padding: 40px 30px;
    }

    .brand h1 {
      font-family: 'Noto Serif', serif;
      font-size: 1.8rem;
      font-weight: 500;
      margin: 0;
      color: var(--text-primary);
      line-height: 1.2;
    }

    .brand-sub {
      display: block;
      font-family: 'Manrope', sans-serif;
      font-size: 0.75rem;
      letter-spacing: 3px;
      margin-top: 5px;
      color: var(--text-secondary);
    }

    .admin-nav {
      flex: 1;
      display: flex;
      flex-direction: column;
      padding-top: 20px;
    }

    .nav-item {
      padding: 18px 30px;
      color: var(--text-secondary);
      text-decoration: none;
      font-weight: 500;
      font-size: 0.85rem;
      letter-spacing: 1.5px;
      text-transform: uppercase;
      transition: all 0.3s ease;
      position: relative;
    }

    .nav-item:hover {
      color: var(--text-primary);
    }

    .nav-item.active {
      color: var(--text-primary);
      font-weight: 700;
    }

    .nav-item.active::before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      height: 100%;
      width: 3px;
      background-color: var(--text-primary);
    }

    .admin-main {
      flex: 1;
      display: flex;
      flex-direction: column;
    }

    .admin-header {
      height: 80px;
      padding: 0 50px;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      background: var(--bg-color, #fefee5);
      border-bottom: 1px solid rgba(0,0,0,0.05);
    }

    .admin-profile {
       display: flex;
       align-items: center;
       gap: 15px;
    }

    .admin-name {
       font-family: 'Manrope', sans-serif;
       font-weight: 600;
       font-size: 0.85rem;
       letter-spacing: 1px;
       color: var(--text-primary);
    }

    .avatar {
       width: 40px;
       height: 40px;
       background-color: transparent;
       border: 1px solid rgba(0,0,0,0.1);
       border-radius: 50%;
       display: flex;
       align-items: center;
       justify-content: center;
       color: var(--text-secondary);
    }

    .admin-content {
      padding: 50px;
      flex: 1;
      overflow-y: auto;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminLayoutComponent { }