<template>
    <BForm class="row g-3">
        <BCol md="4">
            <BFormGroup label="First name">
                <BFormInput type="text" v-model="vbState.firstName" :state="validateFirstName" />
                <BFormValidFeedback :state="validateFirstName">Looks good!</BFormValidFeedback>
                <BFormInvalidFeedback :state="validateFirstName">Please provide valid first name.
                </BFormInvalidFeedback>
            </BFormGroup>
        </BCol>

        <BCol md="4">
            <BFormGroup label="Last name">
                <BFormInput type="text" v-model="vbState.lastName" :state="validateLastName" />
                <BFormValidFeedback :state="validateLastName">Looks good!</BFormValidFeedback>
                <BFormInvalidFeedback :state="validateLastName">Please provide valid last name. </BFormInvalidFeedback>
            </BFormGroup>
        </BCol>

        <BCol md="4">
            <BFormGroup label="Username">
                <BInputGroup>
                    <BInputGroupText>@</BInputGroupText>
                    <BFormInput type="text" v-model="vbState.username" />
                </BInputGroup>
                <BFormValidFeedback :state="validateUserName">Looks good!</BFormValidFeedback>
                <BFormInvalidFeedback :state="validateUserName">Please provide valid username. </BFormInvalidFeedback>
            </BFormGroup>
        </BCol>

        <BCol md="6">
            <BFormGroup label="City">
                <BFormInput type="text" v-model="vbState.city" />
                <BFormValidFeedback :state="validateCity">Looks good!</BFormValidFeedback>
                <BFormInvalidFeedback :state="validateCity">City is required. </BFormInvalidFeedback>
            </BFormGroup>
        </BCol>

        <BCol md="3">
            <BFormGroup label="State">
                <BFormSelect v-model="vbState.state">
                    <option selected disabled value="">Choose...</option>
                    <option>...</option>
                </BFormSelect>
                <BFormValidFeedback :state="validateState">Looks good!</BFormValidFeedback>
                <BFormInvalidFeedback :state="validateState">State is required. </BFormInvalidFeedback>
            </BFormGroup>
        </BCol>

        <BCol md="3">
            <BFormGroup label="Zip">
                <BFormInput v-model="vbState.zip" type="text" />
                <BFormValidFeedback :state="validateZip">Looks good!</BFormValidFeedback>
                <BFormInvalidFeedback :state="validateZip">Zip code is required. </BFormInvalidFeedback>
            </BFormGroup>
        </BCol>

        <BCol cols="12">
            <BFormCheckbox v-model="vbState.isAgree">Agree to terms and conditions</BFormCheckbox>
            <BFormValidFeedback :state="validateAgree">Looks good!</BFormValidFeedback>
            <BFormInvalidFeedback :state="validateAgree">Please agree with our terms. </BFormInvalidFeedback>
        </BCol>

        <BCol cols="12">
            <BButton variant="primary" type="submit"> Submit form </BButton>
        </BCol>
    </BForm>
</template>

<script setup lang="ts">
import { BButton, BCol, BForm, BFormCheckbox, BFormGroup, BFormInput, BFormInvalidFeedback, BFormSelect, BFormValidFeedback, BInputGroup, BInputGroupText } from 'bootstrap-vue-next'
import { computed, reactive } from 'vue'

const vbState = reactive({
    firstName: '',
    lastName: '',
    username: '',
    city: '',
    state: '',
    zip: '',
    isAgree: false
})

const validateFirstName = computed(() => {
    return vbState.firstName.length > 0 && vbState.firstName.length < 15
})
const validateLastName = computed(() => {
    return vbState.lastName.length > 0 && vbState.lastName.length < 15
})
const validateUserName = computed(() => {
    return vbState.username.length > 0 && vbState.username.length < 15
})
const validateCity = computed(() => {
    return vbState.city.length > 0 && vbState.city.length < 15
})
const validateState = computed(() => {
    return vbState.state.length > 0 && vbState.state.length < 15
})
const validateZip = computed(() => {
    return vbState.zip.length > 0 && vbState.zip.length <= 6
})
const validateAgree = computed(() => {
    return vbState.isAgree == true
})
</script>
