/**
 * Connects LEGO EV3 MakeCode editor to Vernier analog sensor
 */

//% color=017477 icon="\f928"
namespace Vernier {
    //% fixedInstances
    export class VernierSensor extends internal.AnalogSensor {

        constructor(port: number) {
            super(port)
        }

        _query() {
            return this._readPin6();
        }

        _info(): string {
            return this._query();
        }

        _update(prev: number, curr: number) {

        }

        _deviceType() {
            return DAL.DEVICE_TYPE_TOUCH
        }

        /**
         * Gets the sensor output in volts
         * @param sensor the ultrasonic sensor port
         */
        //% help=sensors/ultrasonic/distance
        //% block="**Vernier** %this|voltage"
        //% blockId=vernierGetReading
        //% blockNamespace=Vernier
        //% this.fieldEditor="ports"
        reading(): number {
            this.poke();
            return this._query();
        }

    }

}
