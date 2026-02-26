import { MetadataRoute } from 'next';
import { RESTAURANTS } from '@/data/restaurants';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.grandcafe-nice.com'; // Replace with actual production URL when deployed

  // Base routes
  const routes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
  ];

  // Dynamic restaurant routes
  const restaurantRoutes: MetadataRoute.Sitemap = RESTAURANTS.map((restaurant) => ({
    url: `${baseUrl}/restaurants/${restaurant.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  return [...routes, ...restaurantRoutes];
}
