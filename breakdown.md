## breakdown

* Fully React conversion

* Customer ORM
    * CRUD workorder
        * Create new workorders
        * Assigned workorders to techs/manager
    * CRUD Tech
        * Add new tech
        * Update tech info (ex phone number)
    * CRUD Customer
        * create new customer
        * update customer info (produts being installed)
    * CRUD Inventory
        * Add new inventory
        * Assign inventory to a tech

* Roles authentication
    * Portals for:
        * Customer
            * View their workorder/s
            * Chat with tech assigned to workorder
            * Submit feed back about their workorder/s
        * Tech 
            * View workorder that have been assigned
            * chat with customer they have workorders for
        * Manager
            * View all workorders
            * Assign work orders to techs
            * Chat with techs they manage
        * Admin
            * Update roles 
            * Create new techs
            * Create new workorders
            * Add new inventory

* Chat features
    * Use sockets
    * mananger-to-tech
    * customer-to-tech
* Forms are dropdown

* Customer Feedback Submission

* Graphs/Charts
