import {batteryPercentage, onOff} from '../lib/modernExtend';

const definition = {
    zigbeeModel: ['RAINBEE16V2'],
    model: 'RAINBEE16V2',
    vendor: 'Compacta International, Ltd',
    description:
        'Wireless irrigation controller that manages up to 16 sprinkler zones',
    extend: [
        onOff({powerOnBehavior: false, endpoints: {l1: 1, l2: 2, l3: 3}}), // <-- add till 16 here
    ],
};

module.exports = definition;
