/**
 * Copyright 2020 Vercel Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

 export const SITE_URL = 'https://afdecarib.org/webinaires2021';
 export const SITE_ORIGIN = process.env.NEXT_PUBLIC_SITE_ORIGIN || new URL(SITE_URL).origin;
 export const TWITTER_USER_NAME = 'afdec';
 export const BRAND_NAME = 'AFDEC';
 export const SITE_NAME_MULTILINE = ['Webinaires', 'AFDEC'];
 export const SITE_NAME = 'Webinaires AFDEC';
 export const META_DESCRIPTION =
   "L' AFDEC (Association Francophone d Etudes Caribéennes) propose une série de séminaires sur le thème : [re]penser les crises au prisme de l'exemple Caribéen.";
 export const SITE_DESCRIPTION =
   "Une série de rencontres pour [re]penser les crises au prisme de l'exemple caribéen.";
 export const DATE = '18/03/21 - 20/04/21 - 01/06/21 - 21/09/21';
 export const SHORT_DATE = 'Oct 27 - 9:00am PST';
 export const FULL_DATE = 'Oct 27th 9am Pacific Time (GMT-7)';
 export const TWEET_TEXT = META_DESCRIPTION;
 export const COOKIE = 'user-id';
 
 // Remove process.env.NEXT_PUBLIC_... below and replace them with
 // strings containing your own privacy policy URL and copyright holder name
 export const LEGAL_URL = process.env.NEXT_PUBLIC_PRIVACY_POLICY_URL;
 export const COPYRIGHT_HOLDER = process.env.NEXT_PUBLIC_COPYRIGHT_HOLDER;
 
 export const CODE_OF_CONDUCT =
   'https://www.notion.so/vercel/Code-of-Conduct-Example-7ddd8d0e9c354bb597a0faed87310a78';
 export const REPO = 'https://afdecinfo.wordpress.com/';
 export const SAMPLE_TICKET_NUMBER = 1234;
 export const NAVIGATION = [
   {
     name: 'Session 01 juin',
     route: '/stage/a'
   },
   {
     name: 'Programme',
     route: '/schedule'
   },
   {
     name: 'Intervenants',
     route: '/speakers'
   }
 ];
 
 export type TicketGenerationState = 'default' | 'loading';
 