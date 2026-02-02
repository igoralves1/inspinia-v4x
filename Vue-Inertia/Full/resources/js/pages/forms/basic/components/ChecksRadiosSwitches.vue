<template>
  <UICard title="Checks, Radios and Switches">
    <BRow>
      <BCol lg="12">
        <BRow class="g-lg-4 g-2">
          <BCol lg="2">
            <label class="col-form-label">Checkboxes</label>
          </BCol>
          <BCol lg="5">
            <BFormCheckbox class="mb-2">Default Checkbox</BFormCheckbox>

            <div class="mb-2">
              <BFormCheckbox inline>Inline 1</BFormCheckbox>
              <BFormCheckbox inline>Inline 2</BFormCheckbox>
            </div>

            <BFormCheckbox checked disabled class="mb-2">Disabled checked checkbox</BFormCheckbox>

            <h5 class="mt-3">Sizes</h5>
            <BFormCheckbox class="fs-lg mb-2">I'm 16px Checkbox</BFormCheckbox>
            <BFormCheckbox class="fs-xxl mb-2">I'm 20px Checkbox</BFormCheckbox>
          </BCol>
        </BRow>

        <div class="border-top border-dashed my-3"></div>

        <BRow class="g-lg-4 g-2">
          <BCol lg="2">
            <label class="col-form-label">Radios</label>
          </BCol>
          <BCol lg="5">
            <BFormRadio name="group1" class="mb-2">Option 1</BFormRadio>
            <BFormRadio name="group1" class="mb-2">Option 2</BFormRadio>

            <div class="mb-2">
              <BFormRadio name="group2" inline>Option 1</BFormRadio>
              <BFormRadio name="group2" inline>Option 2</BFormRadio>
            </div>

            <BFormRadio checked disabled class="mb-2">Disabled Checked Radio</BFormRadio>

            <h5 class="mt-3">Sizes</h5>
            <div class="mb-2">
              <BFormRadio name="group3" inline class="fs-lg">Cash</BFormRadio>
              <BFormRadio name="group3" inline class="fs-lg">Card</BFormRadio>
            </div>
            <div class="mb-2">
              <BFormRadio name="group4" inline class="fs-xxl">Pickup</BFormRadio>
              <BFormRadio name="group4" inline class="fs-xxl">Home Delivery</BFormRadio>
            </div>
          </BCol>
        </BRow>

        <div class="border-top border-dashed my-3"></div>

        <BRow class="g-lg-4 g-2">
          <BCol lg="2">
            <label class="col-form-label">Switches</label>
          </BCol>
          <BCol lg="5">
            <BFormCheckbox switch class="mb-2">Enabled Switch</BFormCheckbox>
            <BFormCheckbox switch disabled class="mb-2">Disabled Switch</BFormCheckbox>

            <h5 class="mt-3">Sizes</h5>
            <BFormCheckbox switch class="fs-lg mb-2">I'm 16px Switch</BFormCheckbox>
            <BFormCheckbox switch class="fs-xxl mb-2">I'm 20px Switch</BFormCheckbox>
          </BCol>
        </BRow>

        <div class="border-top border-dashed my-3"></div>

        <BRow class="g-lg-4 g-2">
          <BCol lg="2">
            <label class="col-form-label">Reverse</label>
          </BCol>
          <BCol lg="5">
            <div class="w-lg-50">
              <BFormCheckbox reverse class="mb-2">Reverse checkbox</BFormCheckbox>
              <BFormRadio reverse class="mb-2">Reverse radio</BFormRadio>
              <BFormCheckbox switch reverse class="mb-2">Reverse switch</BFormCheckbox>
            </div>
          </BCol>
        </BRow>

        <div class="border-top border-dashed my-3"></div>

        <BRow class="g-lg-4 g-2">
          <BCol lg="2">
            <label class="col-form-label">Colored Checkboxes</label>
          </BCol>
          <BCol lg="5">
            <div class="d-flex flex-wrap gap-4">
              <div>
                <BFormCheckbox id="checkPrimary" checked class="form-check-primary mb-2">Primary</BFormCheckbox>
                <BFormCheckbox id="checkSecondary" checked class="form-check-secondary mb-2">Secondary</BFormCheckbox>
                <BFormCheckbox id="checkSuccess" checked class="form-check-success mb-2">Success</BFormCheckbox>
                <BFormCheckbox id="checkInfo" checked class="form-check-info mb-2">Info</BFormCheckbox>
              </div>
              <div>
                <BFormCheckbox id="checkWarning" checked class="form-check-warning mb-2">Warning</BFormCheckbox>
                <BFormCheckbox id="checkDanger" checked class="form-check-danger mb-2">Danger</BFormCheckbox>
                <BFormCheckbox id="checkPurple" checked class="form-check-purple mb-2">Purple</BFormCheckbox>
                <BFormCheckbox id="checkDark" checked class="form-check-dark">Dark</BFormCheckbox>
              </div>
            </div>
          </BCol>
        </BRow>

        <div class="border-top border-dashed my-3"></div>

        <BRow class="g-lg-4 g-2">
          <BCol lg="2">
            <label class="col-form-label">Colored Radios</label>
          </BCol>
          <BCol lg="5">
            <div class="d-flex flex-wrap gap-4">
              <div>
                <BFormRadio name="radioPrimary" id="radioPrimary" checked class="form-check-primary mb-2">Primary</BFormRadio>
                <BFormRadio name="radioSecondary" id="radioSecondary" checked class="form-check-secondary mb-2">Secondary</BFormRadio>
                <BFormRadio name="radioSuccess" id="radioSuccess" checked class="form-check-success mb-2">Success</BFormRadio>
                <BFormRadio name="radioInfo" id="radioInfo" checked class="form-check-info mb-2">Info</BFormRadio>
              </div>
              <div>
                <BFormRadio name="radioWarning" id="radioWarning" checked class="form-check-warning mb-2">Warning</BFormRadio>
                <BFormRadio name="radioDanger" id="radioDanger" checked class="form-check-danger mb-2">Danger</BFormRadio>
                <BFormRadio name="radioPurple" id="radioPurple" checked class="form-check-purple mb-2">Purple</BFormRadio>
                <BFormRadio name="radioDark" id="radioDark" checked class="form-check-dark">Dark</BFormRadio>
              </div>
            </div>
          </BCol>
        </BRow>

        <div class="border-top border-dashed my-3"></div>

        <BRow class="g-lg-4 g-2">
          <BCol lg="2">
            <label class="col-form-label">Colored Switches</label>
          </BCol>
          <BCol lg="5">
            <div class="d-flex flex-wrap gap-4">
              <div>
                <BFormCheckbox switch id="switchPrimary" checked class="form-check-primary mb-2">Primary</BFormCheckbox>
                <BFormCheckbox switch id="switchSecondary" checked class="form-check-secondary mb-2">Secondary</BFormCheckbox>
                <BFormCheckbox switch id="switchSuccess" checked class="form-check-success mb-2">Success</BFormCheckbox>
                <BFormCheckbox switch id="switchInfo" checked class="form-check-info mb-2">Info</BFormCheckbox>
              </div>
              <div>
                <BFormCheckbox switch id="switchWarning" checked class="form-check-warning mb-2">Warning</BFormCheckbox>
                <BFormCheckbox switch id="switchDanger" checked class="form-check-danger mb-2">Danger</BFormCheckbox>
                <BFormCheckbox switch id="switchPurple" checked class="form-check-purple mb-2">Purple</BFormCheckbox>
                <BFormCheckbox switch id="switchDark" checked class="form-check-dark">Dark</BFormCheckbox>
              </div>
            </div>
          </BCol>
        </BRow>

        <div class="border-top border-dashed my-3"></div>

        <BRow class="g-lg-4 g-2">
          <BCol lg="2">
            <label class="col-form-label">Checkbox Toggle</label>
          </BCol>
          <BCol lg="5">
            <div class="mb-2">
              <input type="checkbox" class="btn-check" id="btncheck1" />
              <label class="btn btn-outline-primary" for="btncheck1">Single Toggle</label>
            </div>
            <div class="btn-group" role="group" aria-label="Checkbox toggle group">
              <input type="checkbox" class="btn-check" id="btncheck2" />
              <label class="btn btn-outline-primary" for="btncheck2">One</label>
              <input type="checkbox" class="btn-check" id="btncheck3" />
              <label class="btn btn-outline-primary" for="btncheck3">Two</label>
              <input type="checkbox" class="btn-check" id="btncheck4" />
              <label class="btn btn-outline-primary" for="btncheck4">Three</label>
            </div>
          </BCol>
        </BRow>

        <div class="border-top border-dashed my-3"></div>

        <BRow class="g-lg-4 g-2">
          <BCol lg="2">
            <label class="col-form-label">Radio Toggle</label>
          </BCol>
          <BCol lg="5">
            <div class="btn-group" role="group" aria-label="Radio toggle group">
              <input type="radio" class="btn-check" name="btnradio" id="btnradio1" />
              <label class="btn btn-outline-secondary" for="btnradio1">Left</label>
              <input type="radio" class="btn-check" name="btnradio" id="btnradio2" />
              <label class="btn btn-outline-secondary" for="btnradio2">Middle</label>
              <input type="radio" class="btn-check" name="btnradio" id="btnradio3" />
              <label class="btn btn-outline-secondary" for="btnradio3">Right</label>
            </div>
          </BCol>
        </BRow>
      </BCol>
    </BRow>
  </UICard>
</template>

<script setup lang="ts">
import { BFormCheckbox, BFormRadio, BRow } from 'bootstrap-vue-next';
import UICard from '@/components/UICard.vue';

</script>