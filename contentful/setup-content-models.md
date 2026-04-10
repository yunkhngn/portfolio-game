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
| `label`           | Short text | Yes      | Small top label (e.g. "Marketing")    |
| `headingLine1`    | Short text | Yes      | First large heading line              |
| `headingLine2`    | Short text | Yes      | Second large heading line             |
| `name`            | Short text | Yes      | Name displayed in the badge           |
| `year`            | Short text | Yes      | Year displayed next to badge          |
| `backgroundImage` | Media      | No       | Background image                      |
| `backgroundVideo` | Media      | No       | Background video (priority over image)|

---

## 3. AboutSection (singleton)

| Field ID   | Type              | Required | Notes                        |
|------------|-------------------|----------|-------------------------------|
| `name`           | Short text        | Yes      | Your full name                |
| `education`      | Short text        | Yes      | Education details (e.g. University) |
| `educationDetail`| Short text        | No       | Degree, major or GPA          |
| `bio`            | Rich text         | Yes      | About me bio content          |
| `photo`    | Media             | Yes      | Portrait photo                |
| `skills`   | Short text (list) | No       | Array of skill tags           |
| `software` | Short text (list) | No       | Array of software/tools tags  |


---

## 4. Project

| Field ID      | Type             | Required | Notes                                              |
|---------------|------------------|----------|-----------------------------------------------------|
| `title`       | Short text       | Yes      | Project title                                        |
| `slug`        | Short text       | Yes      | URL-friendly slug (unique)                           |
| `projectType` | Short text       | Yes      | Type of project (e.g. Game, Clip, Outdoor)           |
| `category`    | Short text       | Yes      | Sub-category (e.g., "Campaign", "Event Production")  |
| `image1Title` | Short text       | No       | Title tag for the first image (e.g. SHOOTING KEY VISUAL) |
| `image2Title` | Short text       | No       | Title tag for the second image (e.g. PROMOTION LANDING PAGE) |
| `situation`   | Rich text        | No       | Background/Situation of the project                  |
| `myScope`     | Rich text        | No       | My Scope / Role details                              |
| `whatIveDone` | Rich text        | No       | What I've Done                                       |
| `result`      | Rich text        | No       | Result                                               |
| `keyLearning` | Rich text        | No       | Key Learning                                         |
| `tags`        | Short text (list)| No       | Tag labels                                           |
| `thumbnail`   | Media            | Yes      | Card thumbnail (first main image on the left)        |
| `media`       | Media (many)     | No       | Gallery (first item is the second main image on the left) |
| `heroVideo`   | Media            | No       | Optional trailer/reel video for hover preview        |
| `featured`    | Boolean          | No       | Highlight on homepage                                |
| `year`        | Integer          | Yes      | Project year                                         |
| `order`       | Integer          | Yes      | Sort order                                           |


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

## 7. MarqueeItem

| Field ID | Type       | Required | Notes                    |
|----------|------------|----------|---------------------------|
| `text`   | Short text | Yes      | Ribbon/marquee text        |
| `order`  | Integer    | Yes      | Sort order                 |

---

## 8. Achievement

| Field ID      | Type         | Required | Notes                                    |
|---------------|--------------|----------|------------------------------------------|
| `title`       | Short text   | Yes      | Title of the achievement (e.g. PROJECT M-BOX)|
| `description` | Rich text    | Yes      | Bullet points describing the achievement |
| `media1`      | Media        | Yes      | The first image (bottom left)            |
| `media2`      | Media        | Yes      | The second image (top right)             |

---

## 9. Learn (Content Type ID: `learn`)

| Field ID      | Type         | Required | Notes                                    |
|---------------|--------------|----------|------------------------------------------|
| `title`       | Short text   | Yes      | Title of the learning section            |
| `description` | Rich text    | Yes      | Bullet points describing learnings       |
| `media1`      | Media        | Yes      | The first image                          |
| `media2`      | Media        | Yes      | The second image                         |

---

## 10. BrandSection

| Field ID | Type       | Required | Notes                                    |
|----------|------------|----------|------------------------------------------|
| `id`     | Short text | Yes      | Unique identifier (e.g. "brand1")        |
| `label`  | Short text | Yes      | Display name (e.g. "GLOBAL TECH")        |
| `logo`   | Media      | No       | Brand logo / icon image                  |
| `order`  | Integer    | Yes      | Sort order                               |

---

## 11. Motto

| Field ID     | Type | Required | Notes                                               |
|--------------|------|----------|-----------------------------------------------------|
| `quoteLines` | JSON | Yes      | Array of `{ text, accent }` (e.g. `[{"text": "Quote", "accent": false}]`) |
| `author`     | Short text | Yes| The author of the quote                             |

