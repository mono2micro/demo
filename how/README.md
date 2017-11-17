# How to convert monoliths to microservices

## Step 1: Extract UI
First, we need to separate ourselves from the embedded Vaadin UI layer. This requires reimplementing the UI in a separate layer. This is a healthy practice in general, and gives greater flexibility in choosing the UI technology. To reduce risk, we could still use the Vaadin framework to code the UI and simply focus on extraction. In our case we will choose a UI update project written in Angular.

In [step1](step1) is an Angular project with the following characteristics
* Product Component that displays the same data as the Vaadin product list
* Cart Component that displays the same data as the Vaadin Cart
* Dummy service endpoints for Product and Cart

Because out UI is now decoupled, we need to expose the backend capabilities as REST services.

__Demo Activity__
Show modifying the Monolith to expose Product and Pricing services as REST endpoints

__Student Activity__
Modify the Monolith to expose Product and Pricing Services as REST endpoints

## Step 2: Drop the UI from the Monolith
This should be a relatively safe activity. We aren't modifying any functionality, just trimming the no-longer-needed UI elements from the Monoith

In [step2](step2) is a modified Monolith project that no longer contains the UI elements. During this release, no changes are pushed for the new UI or on the back end.

__Demo Activity__
Deploy the new UI-less Monolith

__Student Activity__
Deploy the new UI-less Monolith

## Step 3: Introduce a new service and connect the API with an implementation
"New" here can mean two things. New functionality and new implementations of old functionality. Both are useful.
- Because we have decoupled the UI and the backend, we have the flexibility to add new functionality, such as a Ratings and Review Service
- The ultimate goal of this migration is the strangulation of the Monolith. This means breaking out functionality from the backend much in the same way as we broke out the UI. This is where we use our DDD methodology to identify the new business boundries in the application and design the new services.

In [step3](step3) are implementations of the Pricing, Rating, Review, and Catalog micro-services.

__Demo Activity__
Step through creating the Ratings and Review Service or extracting the Product and Pricing Services

__Student Activity__
This is a great opportunity to inject some Open Innovation Labs activities. Student engagement can run from a full Event Storming Lite to a guided implementation activity

## Step 4: Send traffic to the new service
Once the services are implemented, we need to start sending traffic to them. This can be done as a Dark Launch, Canary, or A/B rollout.

__Demo Activity__
Demonstrate different OCP deployment strategies

__Student Activity__
Practice implementing different OCP deployment strategies for A/B and Blue-Green deployments
