#!/usr/bin/env bash
# -*- coding: utf-8 -*-
#
# RERO angular core
# Copyright (C) 2020 RERO
#
# This program is free software: you can redistribute it and/or modify
# it under the terms of the GNU Affero General Public License as published by
# the Free Software Foundation, version 3 of the License.
#
# This program is distributed in the hope that it will be useful,
# but WITHOUT ANY WARRANTY; without even the implied warranty of
# MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
# GNU Affero General Public License for more details.
#
# You should have received a copy of the GNU Affero General Public License
# along with this program. If not, see <http://www.gnu.org/licenses/>.
RED='\033[0;31m'
GREEN='\033[0;0;32m'
NC='\033[0m' # No Color

display_error_message () {
	echo -e "${RED}$1${NC}" 1>&2
}

display_success_message () {
    echo -e "${GREEN}$1${NC}" 1>&2
}

set -e

display_success_message "Building library..."
ng build --configuration production @rero/ng-core

display_success_message "Generate style file..."
npm run build-css

display_success_message "Building test application..."
ng build ng-core-tester --configuration production

display_success_message "Linting the projects..."
npm run lint

display_success_message "Run the tests"
ng test --no-watch --no-progress --browsers=ChromeHeadlessCI

display_success_message "Run pack"
npm run pack
