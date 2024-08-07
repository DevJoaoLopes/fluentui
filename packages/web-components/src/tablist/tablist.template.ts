import { html, slotted } from '@microsoft/fast-element';
import { Tablist } from './tablist.js';

/**
 * @public
 */
export const template = html<Tablist>`
  <template role="tablist">
    <slot name="tab" ${slotted('tabs')}></slot>
  </template>
`;
