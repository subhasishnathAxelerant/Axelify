This variation of heading-2 get's smaller at mobile and tablet.

To acheive this variation you just need to pass `heading-2--m-h3` to `extra_classes`

Example usage:
```
  {% include "@atoms/text/heading/heading-2.twig" with {
    "text": "This is heading 2",
    "extra_classes": "heading-2--m-h3"
  } %}
```