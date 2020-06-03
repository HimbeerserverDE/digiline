/*
 * init.js
 * 
 * Copyright 2020 HimbeerserverDE <admin@himbeerserver.de>
 * 
 * This program is free software; you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation; either version 2 of the License, or
 * (at your option) any later version.
 * 
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 * 
 * You should have received a copy of the GNU General Public License
 * along with this program; if not, write to the Free Software
 * Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston,
 * MA 02110-1301, USA.
 * 
 * 
 */
 
$.ajaxSetup({
	async: false,
	cache: false
});

sleep = ms => {
	return new Promise(resolve => setTimeout(resolve, ms));
}
isFunction = functionToCheck => {
 return functionToCheck && {}.toString.call(functionToCheck) === '[object Function]';
}
opposite_side = side => {
	return {"left": side.left ? false : true, "right": side.right ? false : true, "top": side.top ? false : true, "bottom": side.bottom ? false : true};
}

digilines = {};

digilines.Event = class {
	constructor(x, y, type, chan, msg, side) {
		this.x = x;
		this.y = y;
		this.type = type;
		this.channel = chan;
		this.msg = msg;
		this.side = side;
	}
}

digilines.receptor_send = (x, y, side, chan, msg) => {
	let digilineEvent = new digilines.Event(x, y, "digiline", chan, msg, opposite_side(side));
	if (side.left && isFunction(dragonblocks.getNode(x - 1, y).toNode().digiline)) dragonblocks.getNode(x - 1, y).toNode().digiline(digilineEvent);
	if (side.right && isFunction(dragonblocks.getNode(x + 1, y).toNode().digiline)) dragonblocks.getNode(x + 1, y).toNode().digiline(digilineEvent);
	if (side.top && isFunction(dragonblocks.getNode(x, y - 1).toNode().digiline)) dragonblocks.getNode(x, y - 1).toNode().digiline(digilineEvent);
	if (side.bottom && isFunction(dragonblocks.getNode(x, y + 1).toNode().digiline)) dragonblocks.getNode(x, y + 1).toNode().digiline(digilineEvent);
}

dragonblocks.registerNode({
	name: "digilines:digiline",
	stable: true,
	mobstable: false,
	texture: "digiline.png",
	hardness: 0,
	desc: "Digiline",
	digiline: e => {
		console.log(e);
		if (e.side.left) digilines.receptor_send(e.x + 1, e.y, {"right": true}, e.chan, e.msg);
		if (e.side.right) digilines.receptor_send(e.x - 1, e.y, {"left": true}, e.chan, e.msg);
	},
});
dragonblocks.registerNode({
	name: "digilines:log",
	stable: true,
	texture: "digiline.png",
	hardness: 0,
	desc: "Digiline logging module",
	digiline: e => {
		console.log(e);
	},
});
