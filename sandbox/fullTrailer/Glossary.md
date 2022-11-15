# How does Uber match riders with drivers?

In the seconds after a rider requests a ride,

- Evaluate nearby drivers and riders in one batch.
- Pair riders and drivers in the distribution:  
    aiming to reduce the average wait time for everyone, not just the closest pair. 

In the early days, a rider was immediately matched with the closest available driver. 
It worked well for most riders but sometimes led to long wait times for others.
 Across a whole city, those longer wait times really added up.

Batched matching: if we wait just a few seconds after a request,  it can make a big difference. It’s enough time for a batch of potential rider-driver matches to accumulate. 

**The result is better matches, and everyone’s collective wait time is shorter.**