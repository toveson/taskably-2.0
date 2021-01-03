## breakdown

## Table of Contents

* [Full-React-conversion](#Full-React-conversion)
* [Customer-ORM](#Customer-ORM)
* [Roles-authentication](#Roles-authentication)
* [Chat-features](#Chat-features)
* [Forms-are-dropdown](#Forms-are-dropdown)
* [Customer-Feedback-Submission](#Customer-Feedback-Submission)
* [PWA?](#PWA?)
* [Payroll?](#Payroll?)
* [Graphs/Charts](#Graphs/Charts)

## Full-React-conversion
    * Convert Taskably to REACT!

## Custom-ORM
    * CRUD Tech
        * Add new tech
        * Update tech info (ex phone number)
    * CRUD Customer
        * create new customer
        * update customer info (products being installed)
    * CRUD workorder
        * Create new workorders
        * Assigned workorders to techs/manager
        * Close workorder
        * workorder status (open, in progress, completed, canceled)
    * CRUD Inventory
        * Add new inventory
        * Assign inventory to a tech
        * Tech can add inventory to an assigned work order

## Roles-authentication
    * Portals for:
        * Customer
            * View their workorder/s
            * Chat with tech assigned to workorder
            * Submit feed back about their workorder/s
        * Tech 
            * View workorder that have been assigned
            * Chat with customer they have workorders for
            * Assign inventory to a workorder and close it
            * Set a workorder to be in progress
        * Manager
            * View all workorders
            * Assign work orders to techs
            * Chat with techs they manage
            * View customer feedback
        * Admin
            * Update roles 
            * Create new techs
            * Create new workorders
            * Add new inventory
            * View customer feedback

## Chat-features
    * Use socket.io
        * manager-to-tech
        * customer-to-tech
        * group chat for Admin, all Managers, All techs (for a given area)
        * possibly make chat searchable

## Forms-are-dropdown
    * examples
        * What services a customer will be getting 
        * Techs adding inventory to a workorder

## Customer-Feedback-Submission
    * Allow the customer to:
        * Rate the tech after the workorder is complete
            * Was the tech on time
            * Was the tech in uniform
            * Were there any problems with the install
            * text area input

## PWA?
    * webmanifest
    * Service worker

## Payroll?
    * user can only see their own payroll
    * graph chart for income per day for a given pay period

## Graphs/Charts
    * dashboard pie chart with:
    * total installs
    * completed
    * in progress
    * canceled


## Tech to Add
    * concurrently
        * run both server.js and react with one command