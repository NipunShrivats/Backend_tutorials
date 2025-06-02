## Event Module - Event Emitter

1. It is a core module in Node.Js used to create and handle custom events.
2. It is a part of the events module and is often used for building event-driven systems in node.Js.

### key Methods

1. emit(eventName, [args])

Emits(on triggers) an event with the specifiedName. You can also pass arguments that will be consumed by the listners.
It's like calling a function, but instead, it triggers all listners(functions) attached to the specified event.

2. on(eventName, listner)

Attaches a listner(a function) to a specific eventName. This listner will execute when the event is emitted
