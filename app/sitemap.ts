import { MetadataRoute } from 'next';
import { RESTAURANTS } from '@/data/restaurants';
import { BASE_URL } from '@/lib/seo';

export default function sitemap(): MetadataRoute.Sitemap {
  // Base routes
  const routes: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
  ];

  // Dynamic restaurant routes
  const restaurantRoutes: MetadataRoute.Sitemap = RESTAURANTS.map((restaurant) => ({
    url: `${BASE_URL}/restaurants/${restaurant.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  // Reservation routes
  const reservationRoutes: MetadataRoute.Sitemap = RESTAURANTS.map((restaurant) => ({
    url: `${BASE_URL}/restaurants/${restaurant.slug}/reservation`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  // Menu routes
  const menuRoutes: MetadataRoute.Sitemap = RESTAURANTS.map((restaurant) => ({
    url: `${BASE_URL}/menu/${restaurant.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  return [...routes, ...restaurantRoutes, ...reservationRoutes, ...menuRoutes];
}
