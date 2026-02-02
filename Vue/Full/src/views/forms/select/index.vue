<template>
    <MainLayout>
        <BContainer fluid>
            <PageBreadcrumb title="Select" subTitle="Forms" />

            <BRow class="justify-content-center">
                <BCol lg="8">
                    <BCard no-body>
                        <BCardHeader>
                            <h4 class="card-title">Choices.Js</h4>
                        </BCardHeader>

                        <BCardBody>
                            <p class="text-muted mb-2">
                                Choices.js is a lightweight, configurable select box/text input plugin. Similar to
                                Select2
                                and Selectize but without the jQuery dependency.
                            </p>

                            <a class="btn btn-link p-0 fw-semibold" href="https://choices-js.github.io/Choices/"
                                target="_blank">
                                Choices.Js on View Official Website
                                <Icon icon="tabler:chevron-right" class="ms-1" />
                            </a>
                        </BCardBody>

                        <BCardBody>
                            <BRow class="g-4">
                                <BCol lg="6">
                                    <h5>Single Select Input: Default</h5>
                                    <p class="text-muted mb-0">Set <code>data-choices</code> attribute to set a default
                                        single select.</p>
                                </BCol>
                                <BCol lg="6">

                                    <ChoicesSelect class="form-control" id="choices-single-default">
                                        <option value="">This is a placeholder</option>
                                        <option value="Choice 1">Choice 1</option>
                                        <option value="Choice 2">Choice 2</option>
                                        <option value="Choice 3">Choice 3</option>
                                    </ChoicesSelect>

                                </BCol>
                            </BRow>

                            <div class="my-4 border-top border-dashed"></div>

                            <BRow class="g-4">
                                <BCol lg="6">
                                    <h5>Single Select Input: Option Groups</h5>
                                    <p class="text-muted mb-0">Set <code>data-choices data-choices-groups</code>
                                        attribute
                                        to set option group</p>
                                </BCol>
                                <BCol lg="6">
                                    <ChoicesSelect class="form-control" id="choices-single-groups" data-choices
                                        data-choices-groups data-placeholder="Select City" name="choices-single-groups">
                                        <option value="">Choose a city</option>
                                        <optgroup label="UK">
                                            <option value="London">London</option>
                                            <option value="Manchester">Manchester</option>
                                            <option value="Liverpool">Liverpool</option>
                                        </optgroup>
                                        <optgroup label="FR">
                                            <option value="Paris">Paris</option>
                                            <option value="Lyon">Lyon</option>
                                            <option value="Marseille">Marseille</option>
                                        </optgroup>
                                        <optgroup label="DE" disabled>
                                            <option value="Hamburg">Hamburg</option>
                                            <option value="Munich">Munich</option>
                                            <option value="Berlin">Berlin</option>
                                        </optgroup>
                                        <optgroup label="US">
                                            <option value="New York">New York</option>
                                            <option value="Washington" disabled>Washington</option>
                                            <option value="Michigan">Michigan</option>
                                        </optgroup>
                                        <optgroup label="SP">
                                            <option value="Madrid">Madrid</option>
                                            <option value="Barcelona">Barcelona</option>
                                            <option value="Malaga">Malaga</option>
                                        </optgroup>
                                        <optgroup label="CA">
                                            <option value="Montreal">Montreal</option>
                                            <option value="Toronto">Toronto</option>
                                            <option value="Vancouver">Vancouver</option>
                                        </optgroup>
                                    </ChoicesSelect>
                                </BCol>
                            </BRow>

                            <div class="my-4 border-top border-dashed"></div>

                            <BRow class="g-4">
                                <BCol lg="6">
                                    <h5>Single Select Input: No Search</h5>
                                    <p class="text-muted mb-0">Set
                                        <code>data-choices data-choices-search-false data-choices-removeItem</code>
                                    </p>
                                </BCol>
                                <BCol lg="6">
                                    <ChoicesSelect class="form-control" :choice-options="{ searchEnabled: false }"
                                        id="choices-single-no-search" name="choices-single-no-search" data-choices
                                        data-choices-search-false data-choices-removeItem>
                                        <option value="Zero">Zero</option>
                                        <option value="One">One</option>
                                        <option value="Two">Two</option>
                                        <option value="Three">Three</option>
                                        <option value="Four">Four</option>
                                        <option value="Five">Five</option>
                                        <option value="Six">Six</option>
                                    </ChoicesSelect>
                                </BCol>
                            </BRow>

                            <div class="my-4 border-top border-dashed"></div>

                            <BRow class="g-4">
                                <BCol lg="6">
                                    <h5>Single Select Input: No Sorting</h5>
                                    <p class="text-muted mb-0">Set <code>data-choices data-choices-sorting-false</code>
                                        attribute.</p>
                                </BCol>
                                <BCol lg="6">
                                    <ChoicesSelect id="choices-single-no-sorting" class="form-control"
                                        :choice-options="{ shouldSort: false, shouldSortItems: false }"
                                        name="choices-single-no-sorting">
                                        <option value="Madrid">Madrid</option>
                                        <option value="Toronto">Toronto</option>
                                        <option value="Vancouver">Vancouver</option>
                                        <option value="London">London</option>
                                        <option value="Manchester">Manchester</option>
                                        <option value="Liverpool">Liverpool</option>
                                        <option value="Paris">Paris</option>
                                        <option value="Malaga">Malaga</option>
                                        <option value="Washington" disabled>Washington</option>
                                        <option value="Lyon">Lyon</option>
                                        <option value="Marseille">Marseille</option>
                                        <option value="Hamburg">Hamburg</option>
                                        <option value="Munich">Munich</option>
                                        <option value="Barcelona">Barcelona</option>
                                        <option value="Berlin">Berlin</option>
                                        <option value="Montreal">Montreal</option>
                                        <option value="New York">New York</option>
                                        <option value="Michigan">Michigan</option>
                                    </ChoicesSelect>
                                </BCol>
                            </BRow>

                            <div class="my-4 border-top border-dashed"></div>

                            <BRow class="g-4">
                                <BCol lg="6">
                                    <h5>Multiple Select Input: Default</h5>
                                    <p class="text-muted mb-0">Set <code>data-choices multiple</code> attribute.</p>
                                </BCol>
                                <BCol lg="6">
                                    <ChoicesSelect :options="options4" id="choices-multiple" class="form-control"
                                        multiple />
                                </BCol>
                            </BRow>

                            <div class="my-4 border-top border-dashed"></div>

                            <BRow class="g-4">
                                <BCol lg="6">
                                    <h5>Multiple Select Input: With Remove Button</h5>
                                    <p class="text-muted mb-0">Set
                                        <code>data-choices data-choices-removeItem multiple</code> attribute.
                                    </p>
                                </BCol>
                                <BCol lg="6">
                                    <ChoicesSelect :options="options4" :choice-options="{ removeItemButton: true }"
                                        id="choices-multiple-remove-button" class="form-control" multiple />

                                </BCol>
                            </BRow>

                            <div class="my-4 border-top border-dashed"></div>

                            <BRow class="g-4">
                                <BCol lg="6">
                                    <h5>Multiple Select Input: Option Groups</h5>
                                    <p class="text-muted mb-0">Set
                                        <code>data-choices data-choices-multiple-groups="true" multiple</code>
                                        attribute.
                                    </p>
                                </BCol>
                                <BCol lg="6">
                                    <ChoicesSelect class="form-control" id="choices-multiple-groups"
                                        name="choices-multiple-groups" multiple>
                                        <option value="">Choose a city</option>
                                        <optgroup label="UK">
                                            <option value="London">London</option>
                                            <option value="Manchester">Manchester</option>
                                            <option value="Liverpool">Liverpool</option>
                                        </optgroup>
                                        <optgroup label="FR">
                                            <option value="Paris">Paris</option>
                                            <option value="Lyon">Lyon</option>
                                            <option value="Marseille">Marseille</option>
                                        </optgroup>
                                        <optgroup label="DE" disabled>
                                            <option value="Hamburg">Hamburg</option>
                                            <option value="Munich">Munich</option>
                                            <option value="Berlin">Berlin</option>
                                        </optgroup>
                                        <optgroup label="US">
                                            <option value="New York">New York</option>
                                            <option value="Washington" disabled>Washington</option>
                                            <option value="Michigan">Michigan</option>
                                        </optgroup>
                                        <optgroup label="SP">
                                            <option value="Madrid">Madrid</option>
                                            <option value="Barcelona">Barcelona</option>
                                            <option value="Malaga">Malaga</option>
                                        </optgroup>
                                        <optgroup label="CA">
                                            <option value="Montreal">Montreal</option>
                                            <option value="Toronto">Toronto</option>
                                            <option value="Vancouver">Vancouver</option>
                                        </optgroup>
                                    </ChoicesSelect>
                                </BCol>
                            </BRow>

                            <div class="my-4 border-top border-dashed"></div>

                            <BRow class="g-4">
                                <BCol lg="6">
                                    <h5>Text Input: Limit Values with Remove Button</h5>
                                    <p class="text-muted mb-0">Set
                                        <code>data-choices data-choices-limit="3" data-choices-removeItem</code>
                                        attribute.
                                    </p>
                                </BCol>
                                <BCol lg="6">
                                    <ChoicesInput class="form-control" id="choices-text-remove-button"
                                        :choice-options="{ removeItemButton: true, maxItemCount: 3 }" type="text"
                                        value="Task-1" />
                                </BCol>
                            </BRow>

                            <div class="my-4 border-top border-dashed"></div>

                            <BRow class="g-4">
                                <BCol lg="6">
                                    <h5>Text Input: Unique Values Only</h5>
                                    <p class="text-muted mb-0">Set
                                        <code>data-choices data-choices-text-unique-true</code>
                                        attribute.</p>
                                </BCol>
                                <BCol lg="6">
                                    <ChoicesInput class="form-control" id="choices-text-unique-values"
                                        :choice-options="{ duplicateItemsAllowed: false, paste: false }"
                                        value="Project-A, Project-B" />
                                </BCol>
                            </BRow>

                            <div class="my-4 border-top border-dashed"></div>

                            <BRow class="g-4">
                                <BCol lg="6">
                                    <h5>Text Input: Disabled</h5>
                                    <p class="text-muted mb-0">Set
                                        <code>data-choices data-choices-text-disabled-true</code>
                                        attribute.</p>
                                </BCol>
                                <BCol lg="6">
                                    <ChoicesInput class="form-control" id="choices-text-disabled"
                                        :choice-options="{ itemDisabled: true }" type="text"
                                        value="josh@joshuajohnson.co.uk, joe@bloggs.co.uk" disabled />
                                </BCol>
                            </BRow>

                        </BCardBody>
                    </BCard>

                    <BCard no-body>
                        <BCardHeader>
                            <h4 class="card-title">Multiselect</h4>
                        </BCardHeader>

                        <BCardBody>
                            <p class="text-muted mb-2">
                                Multiselect is an advanced replacement for standard select boxes.
                                It supports searching, remote data sources, and infinite scrolling of results.
                            </p>

                            <a class="btn btn-link p-0 fw-semibold" href="https://vue-multiselect.js.org/"
                                target="_blank">
                                Multi Select on View Official Website
                                <Icon icon="tabler:chevron-right" class="ms-1" />
                            </a>
                        </BCardBody>

                        <BCardBody>

                            <BRow class="g-4">
                                <BCol lg="6">
                                    <h5>Single Select Input with Button</h5>
                                    <p class="text-muted mb-0">An example of a select dropdown with an appended button
                                        using
                                        Select2.</p>
                                </BCol>
                                <BCol lg="6">
                                    <MultiSelect :modelValue="selectedValue" :options="basicOptions"
                                        placeholder="Pick some" />

                                </BCol>
                            </BRow>

                            <div class="my-4 border-top border-dashed"></div>


                            <BRow class="g-4">
                                <BCol lg="6">
                                    <h5>Single Select Input with Groups</h5>
                                    <p class="text-muted mb-0">Select2 can take a regular select box with optgroup
                                        support
                                        for better organization.</p>
                                </BCol>
                                <BCol lg="6">
                                    <Multiselect :v-model="selectedGroupValue" :options="groupedOptions"
                                        group-values="states" group-label="country" />

                                </BCol>
                            </BRow>

                            <div class="my-4 border-top border-dashed"></div>


                            <BRow class="g-4">
                                <BCol lg="6">
                                    <h5>Multiple Select Input</h5>
                                    <p class="text-muted mb-0">Select2 multiple select with grouped options and
                                        placeholder.
                                    </p>
                                </BCol>
                                <BCol lg="6">
                                    <MultiSelect :modelValue="selectedMutiGroupValue" :options="groupedOptions"
                                        group-values="states" group-label="country" :multiple="true" />
                                </BCol>
                            </BRow>

                        </BCardBody>
                    </BCard>
                </BCol>

            </BRow>

        </BContainer>
    </MainLayout>
</template>

<script setup lang="ts">
import { BCard, BCardBody, BCardHeader, BCol, BContainer, BRow } from 'bootstrap-vue-next';
import ChoicesInput from '@/components/ChoicesInput.vue';
import ChoicesSelect from '@/components/ChoicesSelect.vue';
import PageBreadcrumb from '@/components/PageBreadcrumb.vue';
import { Icon } from '@iconify/vue';
import { ref } from 'vue';
import { usePageMeta } from '@/composables/usePageMeta';
import MainLayout from '@/layouts/MainLayout.vue';
import Multiselect from 'vue-multiselect'

const selectedValue = ref({ value: "AK", label: "Alaska" });
const selectedGroupValue = ref('AK');
const selectedMutiGroupValue = ref({ label: 'London', value: 'London' },);

const options4 = [
    { value: 'choice-1', text: 'Choice 1' },
    { value: 'choice-2', text: 'Choice 2' },
    { value: 'choice-3', text: 'Choice 3' },
    { value: 'choice-4', text: 'Choice 4' }
]

const basicOptions: { value: string; label: string }[] = [
    { value: "AK", label: "Alaska" },
    { value: "HI", label: "Hawaii" },
    { value: "CA", label: "California" },
    { value: "NV", label: "Nevada" },
    { value: "OR", label: "Oregon" },
    { value: "WA", label: "Washington" },
    { value: "AZ", label: "Arizona" },
    { value: "CO", label: "Colorado" },
    { value: "ID", label: "Idaho" },
    { value: "MT", label: "Montana" },
    { value: "NE", label: "Nebraska" },
    { value: "NM", label: "New Mexico" },
    { value: "ND", label: "North Dakota" },
    { value: "UT", label: "Utah" },
    { value: "WY", label: "Wyoming" },
    { value: "AL", label: "Alabama" },
    { value: "AR", label: "Arkansas" },
    { value: "IL", label: "Illinois" },
    { value: "IA", label: "Iowa" },
    { value: "KS", label: "Kansas" },
    { value: "KY", label: "Kentucky" },
    { value: "LA", label: "Louisiana" },
    { value: "MN", label: "Minnesota" },
    { value: "MS", label: "Mississippi" },
    { value: "MO", label: "Missouri" },
    { value: "OK", label: "Oklahoma" },
    { value: "SD", label: "South Dakota" },
    { value: "TX", label: "Texas" },
    { value: "TN", label: "Tennessee" },
    { value: "WI", label: "Wisconsin" },
    { value: "CT", label: "Connecticut" },
    { value: "DE", label: "Delaware" },
    { value: "FL", label: "Florida" },
    { value: "GA", label: "Georgia" },
    { value: "IN", label: "Indiana" },
    { value: "ME", label: "Maine" },
    { value: "MD", label: "Maryland" },
    { value: "MA", label: "Massachusetts" },
    { value: "MI", label: "Michigan" },
    { value: "NH", label: "New Hampshire" },
    { value: "NJ", label: "New Jersey" },
    { value: "NY", label: "New York" },
    { value: "NC", label: "North Carolina" },
    { value: "OH", label: "Ohio" },
    { value: "PA", label: "Pennsylvania" },
    { value: "RI", label: "Rhode Island" },
    { value: "SC", label: "South Carolina" },
    { value: "VT", label: "Vermont" },
    { value: "VA", label: "Virginia" },
    { value: "WV", label: "West Virginia" }
]

const groupedOptions = [
    {
        country: 'UK',
        states: [
            { label: 'London', value: 'London' },
            { label: 'Manchester', value: 'Manchester' },
            { label: 'Liverpool', value: 'Liverpool' },
        ],
    },
    {
        country: 'FR',
        states: [
            { label: 'Paris', value: 'Paris' },
            { label: 'Lyon', value: 'Lyon' },
            { label: 'Marseille', value: 'Marseille' },
        ],
    },
    {
        country: 'DE',
        states: [
            { label: 'Hamburg', value: 'Hamburg' },
            { label: 'Munich', value: 'Munich' },
            { label: 'Berlin', value: 'Berlin' },
        ],
        isDisabled: true,
    },
    {
        country: 'US',
        states: [
            { label: 'New York', value: 'New York' },
            { label: 'Washington', value: 'Washington', isDisabled: true },
            { label: 'Michigan', value: 'Michigan' },
        ],
    },
    {
        country: 'SP',
        states: [
            { label: 'Madrid', value: 'Madrid' },
            { label: 'Barcelona', value: 'Barcelona' },
            { label: 'Malaga', value: 'Malaga' },
        ],
    },
    {
        country: 'CA',
        states: [
            { label: 'Montreal', value: 'Montreal' },
            { label: 'Toronto', value: 'Toronto' },
            { label: 'Vancouver', value: 'Vancouver' },
        ],
    },
]

usePageMeta('Form Select')
</script>

<style scoped></style>