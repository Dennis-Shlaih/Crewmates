# Web Development Project 7 - **Crewmates**
Submitted by: **Dennis Shlaih**

This web app: **This web app lets users create, view, edit, and delete custom basketball-themed "Crewmates" using a user-friendly interface. Built with React and Supabase, it stores crewmate data including name, position, skills, and extra info, and displays them in a dynamic gallery. Users can manage their crewmates through dedicated pages for creation, editing, and browsing.**

Time spent: **10** hours spent in total

## Required Features

The following **required** functionality is completed:


- [X] **The web app contains a page that features a create form to add a new crewmate**
  - Users can name the crewmate
  - Users can set the crewmate’s attributes by clicking on one of several values
- [X] **The web app includes a summary page of all the user’s added crewmatese**
  -  The web app contains a summary page dedicated to displaying all the crewmates the user has made so far
  -  The summary page is sorted by creation date such that the most recently created crewmates appear at the top
- [X] **A previously created crewmate can be updated from the list of crewmates in the summary page**
  - Each crewmate has an edit button that will take users to an update form for the relevant crewmate
  - Users can see the current attributes of their crewmate on the update form
  - After editing the crewmate's attribute values using the form, the user can immediately see those changes reflected in the update form and on the summary page 
- [X] **A previously created crewmate can be deleted from the crewmate list**
  - Using the edit form detailed in the previous _crewmates can be updated_ feature, there is a button that allows users to delete that crewmate
  - After deleting a crewmate, the crewmate should no longer be visible in the summary page
  - [X] **Each crewmate has a direct, unique URL link to an info page about them**
    - Clicking on a crewmate in the summary page navigates to a detail page for that crewmate
    - The detail page contains extra information about the crewmate not included in the summary page
    - Users can navigate to to the edit form from the detail page

The following **optional** features are implemented:

- [ ] A crewmate can be given a category upon creation which restricts their attribute value options
  - e.g., a Dungeons and Dragons class or a development team role (project manager, product owner, etc.)
  - User can choose a `category` option to describe their crewmate before any attributes are specified
  - Based on the category value, users are allowed to access only a subset of the possible attributes
- [ ] A section of the summary page, displays summary statistics about a user’s crew on their crew page
  - e.g., the percent of members with a certain attribute 
- [ ] The summary page displays a custom “success” metric about a user’s crew which changes the look of the crewmate list
  - e.g., a pirate crew’s predicted success at commandeering a new galley

## Video Walkthrough

Here's a walkthrough of implemented user stories:

![Crewmates Walkthrough](https://github.com/user-attachments/assets/f1d2b3a6-1483-4be2-a027-71008dccf804)

GIF created with clipchamp  

## Challenges

- [X] I had difficulty with setting up the routing and layout setup using React Router.
- [X] Determining where to use loading states and conditional UI in the gallery and edit components.
- [X] Setting up dynamic URLs for editing specific crewmates using React Router's useParams was also challenging, as it required handling to ensure data loaded before the form is rendered.

## License

    Copyright [2025] [Dennis Shlaih]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
