
# HOME
## GET /

# Product is Item

## GET /products
### List All Products

## GET /products/:id
### List Product

## POST /products
### Add New Product

## PUT /products
### Update Product


# Category describe product

## GET /categories
### List All Categories


# Order is basket for client 

## GET /orders
### List All Orders

## GET /orders/:id
### List Order

## GET /orders/status/:state
### List All Orders With Defined Status

## POST /orders
### Add New Order

## PUT /orders
### Update Order

## PUT /orders/:id/status
### Update Order With New Status


# Order List is product for order

## GET /orderList
### List All Order Lists

## GET /orderList/:orderId
### Get All Order Lists For Defined Order Id

## POST /orderList
### Add New Order List

## PUT /orderList
### Update Order List


# Status describe state of order

## GET /status
### List All Statuses
