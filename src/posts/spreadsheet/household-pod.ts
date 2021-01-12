const title = 'Using the spreadsheet with your household/pod'
const shortTitle = 'For Your Household/Pod'
const content = `
## Pods in the context of the spreadsheet

**Pod:** A small network of trusted friends or relatives who are following a shared set of agreements to try to keep everyone safe from COVID.[^2]

**Who is in my pod? **

*   The main criteria for being in a pod together is that they are willing to follow a shared set of agreements, and track their interactions to stay within an agreed upon risk budget.
*   **Examples of people who might in your pod: **
    *   **Housemates**
    *   **Partner** who you see many times per week
    *   **A friend** who comes over for dinner with everyone in your house many nights every week.
    *   Anyone else you are seeing more than 5 hours per week (indoors, unmasked, undistanced), who you don’t want to have to log each interaction with, and who is willing to follow a shared set of agreements with you.
*   **Your pod might not include**
    *   **Co-workers:** In most work situations, it’s unlikely for everyone to agree to follow a shared set of agreements to stay within a specified risk budget. Instead, you would model what you know about their risk in the Custom Person sheet and count it as an activity in your Activity Log.
    *   **Some friends: **A friend/partner that does not interact with the pod frequently. 
    *   **Regular low risk activities:** A friend you see regularly, but the activity doesn’t ever much risk (ex: an outdoor, distanced, weekly picnic)

**What if I live alone? **

*   If you live alone and are using the spreadsheet, you can think of yourself as a “pod of 1.”
*   If you live alone and are seeing someone regularly and don’t want to log every interaction with them, you might choose to include them in your pod.

**Example pod: **

*   Let’s say 4 people live in your house (you plus 3 other people). 
*   Let’s say Alice comes over to our house for dinner many nights each week. You  don’t want every person in your house to log the points for seeing Alice every time, so you choose to include her as a part of your pod.
*   Total pod size = 5


## Getting started with the spreadsheet for pods

1. **Find your spreadsheet wizard: **Each house needs a local “spreadsheet wizard” who has taken a deep dive into how this system works. As your resident microCOVID expert, you might want to read the <span style="text-decoration:underline;">white paper</span> so you’re prepared to help answer questions about why certain things work the way they do.
2. **Follow the steps in the [Spreadsheet Quickstart Guide](#)**


## How the number of people in your household affects your budget

If you lived alone and were choosing a 1% budget for yourself, then we’d have a budget of 10,000 micoCOVIDs per person per year (= 192/person/week). If you have others in your pod you have a [30% chance of transmitting COVID to each other](https://www.microcovid.org/paper/14-research-sources#household-member) person. That means living with others reduces your “outside of the pod” budget. Each additional person you add to your pod reduces your budget.

Under the hood. Here’s the formula we use:


\`\`\`
"Outside of pod" annual risk per housemate = [ANNUAL RISK BUDGET IN MICROCOVIDS]/(1+([NUMBER OF PODMATES]-1) * 30% housemate transmission rate)
\`\`\`

[^3]

**Some examples**

_(using a 1% annual risk budget)_


<table>
  <tr>
   <td><strong>Number of podmates</strong>
   </td>
   <td><strong><span style="text-decoration:underline;">Annual</span> “out of house” budget per person </strong>
<p>
<em>(microCOVIDs)</em>
   </td>
   <td><strong><span style="text-decoration:underline;">Weekly</span> “out of house” budget per person <em>(microCOVIDs)</em></strong>
   </td>
  </tr>
  <tr>
   <td><p style="text-align: right">
1</p>

   </td>
   <td><p style="text-align: right">
10,000</p>

   </td>
   <td><p style="text-align: right">
192</p>

   </td>
  </tr>
  <tr>
   <td><p style="text-align: right">
2</p>

   </td>
   <td><p style="text-align: right">
7,692</p>

   </td>
   <td><p style="text-align: right">
147</p>

   </td>
  </tr>
  <tr>
   <td><p style="text-align: right">
3</p>

   </td>
   <td><p style="text-align: right">
6,250</p>

   </td>
   <td><p style="text-align: right">
120</p>

   </td>
  </tr>
  <tr>
   <td><p style="text-align: right">
4</p>

   </td>
   <td><p style="text-align: right">
5,263</p>

   </td>
   <td><p style="text-align: right">
101</p>

   </td>
  </tr>
  <tr>
   <td><p style="text-align: right">
5</p>

   </td>
   <td><p style="text-align: right">
4,545</p>

   </td>
   <td><p style="text-align: right">
87</p>

   </td>
  </tr>
  <tr>
   <td><p style="text-align: right">
6</p>

   </td>
   <td><p style="text-align: right">
4,000</p>

   </td>
   <td><p style="text-align: right">
76</p>

   </td>
  </tr>
  <tr>
   <td><p style="text-align: right">
7</p>

   </td>
   <td><p style="text-align: right">
3,571</p>

   </td>
   <td><p style="text-align: right">
68</p>

   </td>
  </tr>
</table>


_Note:_ You don’t need to fill anything from this table into the spreadsheet. It will calculate this for you based on your current pod size.


## Understanding risk to me & risk to pod

The main thing most group houses are concerned about is the question: how do we negotiate the risk to one another?

**Risk to me:** Any activities I’ve done in the last 0-7 days counts against my budget for myself.

**Risk to pod:** Any activities in the last 2-9 days counts against my pod budget.


## How to track & report your risk to people outside your pod / house

Asking someone if they have symptoms before you see them cuts your risk in half (see [Research Sources](https://www.microcovid.org/paper/all#note-on-infectious-period-contacts-symptoms) for details).

Ask friends about these symptoms **_<span style="text-decoration:underline;">right before</span>_** seeing them:

You can use this [symptoms page](#) to help guide you through asking some questions. Or you can text the link to the person you’re seeing.


#### If symptoms show up...



*   **If they have symptoms <span style="text-decoration:underline;">BEFORE</span> you see each other:** You can use the _Has prominent COVID symptoms (high fever, drive cough, lost of taste/smell) _Person Type if you want to model a way to adjust this interaction that keeps it within your budget.
*   **If they have symptoms within 7 days <span style="text-decoration:underline;">AFTER</span> you see each other:** If possible, the safest option is to quarantine within your house, and reduce your exposure to others as much as possible until you can confirm/deny whether they have COVID.


## FAQ for households & pods


### When should I add someone to our “pod” vs track each time they interact with us?

You should add someone to your pod if you know you want to collaborate with someone you see frequently to follow a shared set of agreements around COVID safety protocols, and they are willing to track all their activities to stay within a budget. A rule of thumb is that you will save points on that person’s interactions by adding them to your pod if you interact more than 5 hours per week indoors, undistanced, unmasked.


### What happens when multiple people in the house see someone at once? How do we enter that activity?

When multiple people in your pod see the same person on the same day, you all need to log the activity. Here are two approaches you can consider for how to log it.

Let’s use an example where in a pod of 4 people, 2 of the podmates have dinner with someone outside the pod.

**Option A: Easy to use, costs more than it needs to**

The simplest option is to have everyone log that interaction as though it happened independently. This is very easy, because it’s just like any other interaction you would have.

If the activity is 10 points, each podmate would just log it as 10 points.

The downside is that, for a large pod, this overcalculates  the risk quite a bit. (See Option B for an explanation). If you aren’t too concerned about saving every last point in your budget, then this option might be a good choice because it’s simple. 

**Option B: More complex, saves points**

The more accurate approach will save points, but is more involved (both in terms of coordination and the math involved).

_Here’s the formula involved: _


\`\`\`
    Adjusted Points Per Person = 1 / (1 + 30% * 50% * (P - 1))
\`\`\`


Explanation: P is the number of podmates who were present for the activity. The 30% number is for housemate transmission, the 50% number is for “will report symptoms” within the pod.)

Let’s use an example where in a pod of 6 people, 4 of the podmates have dinner with someone outside the pod. If the activity was normally 20 points, each person would instead log an activity of: 


\`\`\`
    20 * 1 / (1 + 30% * 50% * (3 - 1)) = 5 points
\`\`\`


_Note:_ We haven’t yet implemented Option B this feature in the spreadsheet, though we hope to in the future.

_Why does it work this way?_ 

The primary factor in “will a person get infected during an interaction” is whether or not the infected person is shedding virus. The amount of virus a person sheds varies by several orders of magnitude day-to-day (from viral load)  and based on physiology (based on how much aerosols the person generates). Thus, the chances of each person getting infected are highly correlated, so the risk of secondary infection from an interaction is low (you can’t get COVID from your housemate if you already got it from the original interaction).

Thus, for an activity that costs C points, your risk to others should go up by C.

Since every person in your pod is recording R points for the interaction, your risk to others goes up by


\`\`\`
C = R + (P - 1) * 30% * 50% * R
\`\`\`


Solving this for R yields:


\`\`\`
R = C / (1 + 15% * (P - 1) )
\`\`\`



### If an outside-of-pod person interacts with one person in our pod, does that mean we can all see them and it’s the same thing?

Just because another pod is “connected” to your pod through one person doesn’t mean that all those people are now “in your pod.” For example, having a whole other house over for dinner is much more risky than having just one member of that house over for dinner. See this explanation in the [Q&A](https://www.microcovid.org/paper/13-q-and-a#so-if-my-housemate-really-wants-to-see-a-partner-in-another-house-you-believe-it-is-sometimes-better-from-a-risk-standpoint-not-to-negotiate-for-the-partners-entire-house-to-get-added-to-a-closed-bubble-with-us).  This is because each person in the transmission chain acts as a “buffer” of sorts, because there is only a 30% chance of transmission. There is a time delay in transmission, and if everyone agrees to report symptoms, that one person can isolate if anyone else in their pod gets symptoms. But if you see everyone in their pod, you’re all getting exposed to all of those people at once.

Numerically, if the outside-of-pod person interacts with one person in your pod and that interaction costs C points, the podmate interacting will incur a cost of C points and the other podmates will incur 0.3 * C (or 0.15 * C if the outside-of-pod person agrees to report symptoms and the podmate will isolate if the outside-of-pod person develops symptoms). If the entire pod sees the person, they will each incur C.


### What about activities that one person does on behalf of the whole house?

_(INTERNAL NOTE: update this image when launching →)_

If someone does something for the whole house (like grocery shopping) and you want to count it against everyone’s, you can enter it on the settings page and everyone’s budget will be reduced proportionally.

_Example:_ If you each had a budget of 115 points/week in a pod of 4 people, and one person did grocery shopping every week that cost them 16 points, if you add it here, and everyone’s budget will go down by 9 points. The result is that each person’s budget is now 106 points/week. (You can dig into the spreadsheet formulas if you want to get into the math underlying this.)

`

const post = { title, shortTitle, content }
export default post