# digilines
Digiline mod for Dragonblocks

# Features
This mod is inspired by the digiline mod for Minetest. It allows you to send messages on channels through wires. The system can be used by external mods.
## The new nodes provided are:
- Digiline wire
- Digiline screen (not added yet)
## Planned nodes are:
- Digiline RTC/real-time clock ()
- Digiline light sensor (daylight cycle is not in the game yet)
I'll probably make some digiline extensions adding more nodes and items.

# API
## Sending
To send something via digilines, you can use digilines.receptor_send():
digilines.receptor_send(x : int, y : int, side : Object, chan : String, msg : mixed) : void
- x is the x coordinate of the node sending the message
- y is the y coordinate of the node sending the message
- side should (but does not need to) include the following entries:<br/>
-- left : bool<br/>
-- right : bool<br/>
-- top : bool<br/>
-- bottom : bool<br/>
If a value is unset, it counts as false.
This object determines where to send the message (on which sides the message will be sent).
- chan is the channel on which the message should be sent, typically a string
- msg is the message to send, the variable type doesn't matter at all
## Receiving
Receiving messages works by adding a special property to a MapNode, the digiline property. It has to be a function. It only has one argument, a digilines.Event. A digilines.Event contains the following information:
- x : int ; the x coordinate of the sender
- y : int ; the y coordinate of the sender
- type : String ; the event type, only used value is "digiline"
- channel : String ; the channel on which the message was sent
- msg : mixed ; the message that was sent
- side : Object ; contains information about from which side of the receiver the data could possibly come from
<br/>
You can then use this data to make decisions and/or take actions.
