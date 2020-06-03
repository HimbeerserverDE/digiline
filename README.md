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
- side should (but does not need to) include the following entries:
-- left : bool
-- right : bool
-- top : bool
-- bottom : bool
If a value is unset, it counts as false.
This object determines where to send the message (on which sides the message will be sent).
- chan is the channel on which the message should be sent, typically a string
- msg is the message to send, the variable type doesn't matter at all
