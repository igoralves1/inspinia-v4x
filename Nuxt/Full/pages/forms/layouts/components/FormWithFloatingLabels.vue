<template>
    <BCard no-body class="mt-4">
        <BCardHeader>
            <h4 class="card-title">Floating Labels</h4>
        </BCardHeader>
        <BCardBody>
            <BForm>
                <BRow class="g-3">
                    <BCol lg="6">
                        <BFormFloatingLabel label="Username">
                            <BFormInput id="usernameInput" placeholder="Enter username" />
                        </BFormFloatingLabel>
                    </BCol>

                    <BCol lg="6">
                        <BFormFloatingLabel label="Full Name">
                            <BFormInput id="fullnameInput" placeholder="Enter full name" />
                        </BFormFloatingLabel>
                    </BCol>

                    <BCol lg="4">
                        <BFormFloatingLabel label="Phone Number">
                            <BFormInput id="phoneInput" type="tel" placeholder="Enter phone number" />
                        </BFormFloatingLabel>
                    </BCol>

                    <BCol lg="4">
                        <BFormFloatingLabel label="Date of Birth">
                            <BFormInput id="dobInput" type="date" />
                        </BFormFloatingLabel>
                    </BCol>

                    <BCol lg="4">
                        <BFormFloatingLabel label="Gender">
                            <BFormSelect id="genderSelect" :options="['Choose...', 'Male', 'Female', 'Other']" />
                        </BFormFloatingLabel>
                    </BCol>

                    <BCol lg="8">
                        <BFormFloatingLabel label="Street Address">
                            <BFormInput id="addressInput" placeholder="Enter your address" />
                        </BFormFloatingLabel>
                    </BCol>

                    <BCol lg="4">
                        <BFormFloatingLabel label="State">
                            <BFormSelect id="stateSelect" :options="['Choose...', 'California', 'Texas', 'Florida']" />
                        </BFormFloatingLabel>
                    </BCol>

                    <BCol lg="6">
                        <BFormFloatingLabel label="Website (optional)">
                            <BFormInput id="websiteInput" type="url" placeholder="Enter website URL" />
                        </BFormFloatingLabel>
                    </BCol>

                    <BCol lg="6">
                        <BFormFloatingLabel label="Short Bio">
                            <BFormTextarea id="bioTextarea" placeholder="Tell us about yourself"
                                style="height: 100px" />
                        </BFormFloatingLabel>
                    </BCol>

                    <BCol lg="12">
                        <BButton type="submit" variant="success">Create Account</BButton>
                    </BCol>
                </BRow>
            </BForm>
        </BCardBody>
    </BCard>
</template>

<script setup lang="ts">
import { BFormFloatingLabel } from 'bootstrap-vue-next';


</script>

<style scoped></style>