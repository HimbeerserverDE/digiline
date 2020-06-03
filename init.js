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

function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}
function isFunction(functionToCheck) {
 return functionToCheck && {}.toString.call(functionToCheck) === '[object Function]';
}

digilines = {};

digilines.Event = class {
	constructor(type, chan, msg) {
		this.type = type;
		this.channel = chan;
		this.msg = msg;
	}
}

digilines.receptor_send() = (x, y, chan, msg) => {
	let digilineEvent = new digilines.Event("digiline", chan, msg);
	for (let i = x - 1; i < x + 1; i += 2) {
		if (isFunction(dragonblocks.getNode(i, y).toNode().digiline)) dragonblocks.getNode(i, y).toNode().digiline(digilineEvent);
	}
}
