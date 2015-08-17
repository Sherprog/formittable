# formittable
Simply save a user's HTML form input data using HTML5 localStorage.

Formittable uses the HTML5 localStorage API to allow save, retrieve, and delete functionality for data in HTML form inputs. Coupled with a cache.manifest file, this can allow users to fill out forms offline and submit the data later, when Internet connectivity is available.

Currently, it supports input and select elements, excluding checkboxes and radio buttons. It intentionally excludes submit inputs and inputs with type or id of "password".

Find a demo here: http://iotap.io/formittablejs

## Usage

Obviously (maybe obviously?), begin by adding formittable.js to your project. Reference it with `<script src="*yourpath*/formittable.js"></script>`.

To use the code, create elements (e.g. buttons) with ids **formbl-save, formbl-restore, formbl-delete,** and **formbl-clear.**

On click event, 

- **formbl-save** saves all input and select values to localStorage within an appropriately delineated namespace,
- **formbl-restore** pulls available values back from localStorage,
- **formbl-delete** empties entered input values, but does not clear localStorage, and
- **formbl-clear** nukes both the values and whatever your app put in localStorage.

In addition, localStorage values are pulled, if available, on page load for returning users.

Formittable automatically saves in the namespace of "*your.reverse.url*-formbl-*elementId*."

## Known Weaknesses / ToDo

- As mentioned, Formittable does not currently support checkboxes or radiobuttons, and has not been tested with sliders.
- Does not currently include versioning of saved form data as a feature, e.g. allowing undo functionality or multiple instances of the same form for a single user.
- Does not, by itself, test for localStorage (but should fail gracefully--which is to say quietly). 
