/*
 This file is part of web3.js.

 web3.js is free software: you can redistribute it and/or modify
 it under the terms of the GNU Lesser General Public License as published by
 the Free Software Foundation, either version 3 of the License, or
 (at your option) any later version.

 web3.js is distributed in the hope that it will be useful,
 but WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 GNU Lesser General Public License for more details.

 You should have received a copy of the GNU Lesser General Public License
 along with web3.js.  If not, see <http://www.gnu.org/licenses/>.
 */
/**
 * @file MethodModelFactory.js
 * @author Samuel Furter <samuel@ethereum.org>
 * @date 2018
 */

import Shh from '../Shh';
import MethodModelFactory from './MethodModelFactory';

export default class ShhModuleFactory {
    /**
     * @param {Object} utils
     * @param {Object} formatters
     *
     * @constructor
     */
    constructor(utils, formatters) {
        this.utils = utils;
        this.formatters = formatters;
    }

    /**
     * Returns an object of type Shh
     *
     * @method createShhModule
     *
     * @param {AbstractProviderAdapter} provider
     * @param providersModuleFactory
     * @param providers
     * @param {MethodController} methodController
     * @param {SubscriptionsFactory} subscriptionsFactory
     * @param {Network} net
     *
     * @returns {Shh}
     */
    createShhModule(
        provider,
        providersModuleFactory,
        providers,
        methodController,
        subscriptionsFactory,
        net
    ) {
        return new Shh(
            provider,
            providersModuleFactory,
            providers,
            methodController,
            this.createMethodModelFactory(),
            subscriptionsFactory,
            net
        );
    }

    /**
     * Returns an object of type MethodModelFactory
     *
     * @method createMethodModelFactory
     *
     * @returns {MethodModelFactory}
     */
    createMethodModelFactory() {
        return new MethodModelFactory(this.utils, this.formatters);
    }
}