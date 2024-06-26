import { z } from 'zod';

export const ghostRole = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
  created_at: z.string().datetime(),
  updated_at: z.string().datetime(),
});

export const ghostAuthor = z.object({
  id: z.string(),
  name: z.string(),
  slug: z.string(),
  email: z.string(),
  profile_image: z.string().nullable(),
  cover_image: z.string().nullable(),
  bio: z.string().nullable(),
  website: z.string().nullable(),
  location: z.string().nullable(),
  facebook: z.string().nullable(),
  twitter: z.string().nullable(),
  accessibility: z.string().nullable(),
  status: z.enum(['active']),
  meta_title: z.string().nullable(),
  meta_description: z.string().nullable(),
  tour: z.null(),
  last_seen: z.string().datetime(),
  comment_notifications: z.boolean(),
  free_member_signup_notification: z.boolean(),
  paid_subscription_started_notification: z.boolean(),
  paid_subscription_canceled_notification: z.boolean(),
  mention_notifications: z.boolean(),
  recommendation_notifications: z.boolean(),
  milestone_notifications: z.boolean(),
  donation_notifications: z.boolean(),
  created_at: z.string().datetime(),
  updated_at: z.string().datetime(),
  roles: ghostRole.array(),
  url: z.string().url(),
});

export const ghostPayload = z.object({
  post: z.object({
    current: z.object({
      id: z.string(),
      uuid: z.string(),
      title: z.string(),
      slug: z.string(),
      mobiledoc: z.null(),
      html: z.string(),
      comment_id: z.string(),
      plaintext: z.string(),
      feature_image: z.string().nullable(),
      featured: z.boolean(),
      status: z.enum(['published', 'draft']),
      visibility: z.enum(['public', 'members']),
      created_at: z.string().datetime(),
      updated_at: z.string().datetime(),
      published_at: z.string().datetime(),
      custom_excerpt: z.string().nullable(),
      codeinjection_head: z.string().nullable(),
      codeinjection_foot: z.string().nullable(),
      custom_template: z.string().nullable(),
      canonical_url: z.string().nullable(),
      authors: ghostAuthor.array(),
      excerpt: z.string().nullable(),
    }),
  }),
});

export type GhostPayload = z.infer<typeof ghostPayload>;
