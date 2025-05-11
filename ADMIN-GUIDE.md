# High Roller Admin Guide

This guide explains how to manage your High Roller platform, including user management, adding/removing products, editing button links, and updating global settings.

## Table of Contents

1. [User Management](#user-management)
2. [Configuration System](#configuration-system)
3. [Adding or Removing Services](#adding-or-removing-services)
4. [Editing Button Links](#editing-button-links)
5. [Updating Global Settings](#updating-global-settings)
6. [Managing Telegram Settings](#managing-telegram-settings)
7. [Admin Interface](#admin-interface)

## User Management

The High Roller platform includes a user management system that allows you to:

- View all registered users
- Edit user information
- View user credentials
- Delete users

### Accessing User Management

1. Navigate to `/admin` in your browser
2. Click on the "Manage Users" button
3. This will take you to the user management page at `/admin/users`

### User Data Storage

User data is stored in a JSON file located at `data/users.json`. This file contains all user information, including:

- User ID
- Name
- Email
- Password (stored in plain text for easy access)
- Creation date
- Last login date

> **Note:** In a production environment, passwords should be hashed for security. The current implementation stores passwords in plain text for simplicity and to allow you to easily see and manage user credentials.

## Configuration System

The High Roller platform uses a centralized configuration system located in `lib/config.ts`. This file contains all the services, global settings, and configuration options for the platform.

### Key Configuration Files

- `lib/config.ts` - Main configuration file containing all services and global settings
- `app/admin/page.tsx` - Admin interface for managing configurations (visual reference only)

## Adding or Removing Services

To add or remove services, edit the appropriate array in the `lib/config.ts` file:

### Example: Adding a New Automation Service

\`\`\`typescript
// In lib/config.ts
export const automationServices: Service[] = [
  // Existing services...
  
  // Add a new service
  {
    id: "new-service-id",
    title: "New Service Name",
    description: "Description of the new service.",
    price: { value: "$199", period: "month" },
    tags: [
      { text: "Automation", color: "tag-green" },
      { text: "New", color: "tag-blue" },
    ],
    icon: "Zap", // Use any Lucide icon name
    buttonText: "Buy Now",
    buttonLink: "https://checkout.highroller.io/new-service",
    graphicType: "network", // Options: "network", "wave", "particles", "grid"
  },
];
\`\`\`

### Example: Removing a Service

To remove a service, simply delete its entry from the appropriate array in `lib/config.ts`.

## Editing Button Links

All button links are stored in the service objects or in the global configuration:

### Service-Specific Button Links

\`\`\`typescript
{
  id: "email-flow-automation",
  // Other properties...
  buttonText: "Buy Now",
  buttonLink: "https://checkout.highroller.io/email-flow", // Edit this URL
}
\`\`\`

### Default Button Links (Global)

\`\`\`typescript
export const globalConfig: GlobalConfig = {
  // Other properties...
  defaultBookCallLink: "https://calendly.com/highroller/consultation", // Edit this URL
  defaultBuyNowLink: "https://checkout.highroller.io/", // Edit this URL
};
\`\`\`

## Updating Global Settings

Global settings are stored in the `globalConfig` object in `lib/config.ts`:

\`\`\`typescript
export const globalConfig: GlobalConfig = {
  telegramBotUsername: "@inflnce_bot", // Edit Telegram username
  telegramConnectLink: "https://t.me/inflnce_bot", // Edit Telegram link
  defaultCurrency: "$", // Edit default currency symbol
  defaultButtonText: "Buy Now", // Edit default button text
  defaultBookCallText: "Book a Call", // Edit default book call text
  defaultBookCallLink: "https://calendly.com/highroller/consultation", // Edit default book call link
  defaultBuyNowLink: "https://checkout.highroller.io/", // Edit default buy now link
};
\`\`\`

## Managing Telegram Settings

The Telegram connect component uses settings from the global configuration:

\`\`\`typescript
export const globalConfig: GlobalConfig = {
  telegramBotUsername: "@inflnce_bot", // Edit this to change the displayed username
  telegramConnectLink: "https://t.me/inflnce_bot", // Edit this to change the link
  // Other properties...
};
\`\`\`

## Admin Interface

The admin interface provides a visual reference for all configurable options. However, to actually apply changes, you need to update the `lib/config.ts` file.

### Using the Admin Interface

1. Navigate to `/admin` in your browser
2. Make changes in the interface
3. Click "Save Changes"
4. Copy the displayed values and update them in `lib/config.ts`

### Admin Routes

- `/admin` - Main admin dashboard for managing global settings and services
- `/admin/users` - User management interface

## Security Considerations

1. The admin interface and user management pages should be properly secured in a production environment.
2. Consider implementing proper authentication and authorization for admin routes.
3. In a production environment, passwords should be hashed rather than stored in plain text.
