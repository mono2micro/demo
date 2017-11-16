# How to convert monoliths to microservices

## Step 1: Extract UI
First, we need to separate ourselves from the embedded Vaadin UI layer. This requires reimplementing the UI in a separate layer. This is a healthy practice in general, and gives greater flexibility in choosing the UI technology. In theory, we could still use the Vaadin framework to code the UI, but in our case we will choose Angular.

In [step1](step1) is an Angular project with the following characteristics
* Product Component that displays the same data as the Vaadin product list
* Cart Component that displays the same data as the Vaadin Cart
* Dummy service endpoints for Product and Cart


