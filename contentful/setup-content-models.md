# Contentful Content Models Setup Guide

Create the following content models in your Contentful space. Use exact field IDs as specified.

---

## 1. SiteConfig (singleton)

| Field ID      | Type       | Required | Notes                                             |
|---------------|------------|----------|---------------------------------------------------|
| `name`        | Short text | Yes      | Your display name                                 |
| `title`       | Short text | Yes      | Page title for SEO                                |
| `tagline`     | Short text | Yes      | Short tagline / meta description                  |
| `email`       | Short text | Yes      | Contact email                                     |
| `socialLinks` | JSON       | No       | Array of `{ platform, url, icon }` objects        |

---

## 2. HeroSection (singleton)

| Field ID          | Type       | Required | Notes                               |
|-------------------|------------|----------|---------------------------------------|
| `heading`         | Short text | Yes      | Main hero heading                     |
| `subheading`      | Short text | Yes      | Hero subtitle                         |
| `backgroundImage` | Media      | No       | Background image (fallback if no video)|
| `backgroundVideo` | Media      | No       | Background video (takes priority)     |
| `ctaText`         | Short text | No       | CTA button label                      |

---

## 3. AboutSection (singleton)

| Field ID | Type       | Required | Notes                        |
|----------|------------|----------|-------------------------------|
| `bio`    | Rich text  | Yes      | About me bio content          |
| `photo`  | Media      | Yes      | Portrait photo                |
| `skills` | Short text (list) | No | Array of skill tags          |

---

## 4. Project

| Field ID      | Type             | Required | Notes                                              |
|---------------|------------------|----------|-----------------------------------------------------|
| `title`       | Short text       | Yes      | Project title                                        |
| `slug`        | Short text       | Yes      | URL-friendly slug (unique)                           |
| `projectType` | Short text       | Yes      | Dropdown: `Game`, `Clip`, `Outdoor`                  |
| `category`    | Short text       | Yes      | Sub-category (e.g., "Campaign", "Event Production")  |
| `description` | Rich text        | Yes      | Detailed project description                         |
| `tags`        | Short text (list)| No       | Tag labels                                           |
| `thumbnail`   | Media            | Yes      | Card thumbnail (image or video)                      |
| `media`       | Media (many)     | No       | Gallery: supports both images and videos             |
| `heroVideo`   | Media            | No       | Optional trailer/reel video for hover preview        |
| `featured`    | Boolean          | No       | Highlight on homepage                                |
| `year`        | Integer          | Yes      | Project year                                         |
| `order`       | Integer          | Yes      | Sort order                                           |

**Validation for `projectType`:** Use "Accept only specified values" with: `Game`, `Clip`, `Outdoor`

---

## 5. Service

| Field ID      | Type       | Required | Notes                    |
|---------------|------------|----------|---------------------------|
| `title`       | Short text | Yes      | Service name               |
| `description` | Long text  | Yes      | Service description        |
| `icon`        | Short text | No       | Icon identifier            |
| `order`       | Integer    | Yes      | Sort order                 |

---

## 6. Experience

| Field ID      | Type       | Required | Notes                    |
|---------------|------------|----------|---------------------------|
| `role`        | Short text | Yes      | Job title                  |
| `company`     | Short text | Yes      | Company name               |
| `startDate`   | Date       | Yes      | Start date                 |
| `endDate`     | Date       | No       | End date (null = present)  |
| `description` | Long text  | Yes      | Role description           |
| `order`       | Integer    | Yes      | Sort order                 |

---

## 7. Testimonial

| Field ID  | Type       | Required | Notes                    |
|-----------|------------|----------|---------------------------|
| `name`    | Short text | Yes      | Person's name              |
| `role`    | Short text | Yes      | Their title/role           |
| `company` | Short text | Yes      | Their company              |
| `quote`   | Long text  | Yes      | Testimonial text           |
| `avatar`  | Media      | No       | Profile photo              |
| `order`   | Integer    | Yes      | Sort order                 |

---

## 8. MarqueeItem

| Field ID | Type       | Required | Notes                    |
|----------|------------|----------|---------------------------|
| `text`   | Short text | Yes      | Ribbon/marquee text        |
| `order`  | Integer    | Yes      | Sort order                 |
