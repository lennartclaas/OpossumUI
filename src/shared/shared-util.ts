// SPDX-FileCopyrightText: Meta Platforms, Inc. and its affiliates
// SPDX-FileCopyrightText: TNG Technology Consulting GmbH <https://www.tngtech.com>
//
// SPDX-License-Identifier: Apache-2.0

import { KeysOfPackageInfo } from '../Frontend/types/types';
import { PackageInfo } from './shared-types';

export function getPackageInfoKeys(): Array<KeysOfPackageInfo> {
  type KeysEnum<T> = { [P in keyof Required<T>]: true };
  const packageInfoKeysObject: KeysEnum<PackageInfo> = {
    attributionConfidence: true,
    comment: true,
    packageName: true,
    packageVersion: true,
    packageNamespace: true,
    packageType: true,
    packagePURLAppendix: true,
    url: true,
    copyright: true,
    licenseName: true,
    licenseText: true,
    source: true,
    firstParty: true,
    followUp: true,
    originIds: true,
    preSelected: true,
    excludeFromNotice: true,
    criticality: true,
    needsReview: true,
    preferred: true,
    preferredOverOriginIds: true,
  };
  return Object.keys(packageInfoKeysObject) as Array<KeysOfPackageInfo>;
}
