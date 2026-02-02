<template>
    <BCard no-body>
        <BCardHeader>
            <h4 class="card-title">Form Row</h4>
        </BCardHeader>

        <BCardBody>
            <form>
                <BRow class="g-2">
                    <BCol md="6" class="mb-3">
                        <label for="inputEmail4" class="form-label">Email</label>
                        <BFormInput type="email" id="inputEmail4" placeholder="Email" />
                    </BCol>
                    <BCol md="6" class="mb-3">
                        <label for="inputPassword4" class="form-label">Password</label>
                        <BFormInput type="password" id="inputPassword4" placeholder="Password" />
                    </BCol>
                </BRow>

                <div class="mb-3">
                    <label for="inputAddress" class="form-label">Address</label>
                    <BFormInput type="text" id="inputAddress" placeholder="1234 Main St" />
                </div>

                <div class="mb-3">
                    <label for="inputAddress2" class="form-label">Address 2</label>
                    <BFormInput type="text" id="inputAddress2" placeholder="Apartment, studio, or floor" />
                </div>

                <BRow class="g-2">
                    <BCol md="6" class="mb-3">
                        <label for="inputCity" class="form-label">City</label>
                        <BFormInput type="text" id="inputCity" />
                    </BCol>
                    <BCol md="4" class="mb-3">
                        <label for="inputState" class="form-label">State</label>
                        <BFormSelect id="inputState" class="form-select">
                            <option>Choose</option>
                            <option>Option 1</option>
                            <option>Option 2</option>
                            <option>Option 3</option>
                        </BFormSelect>
                    </BCol>
                    <BCol md="2" class="mb-3">
                        <label for="inputZip" class="form-label">Zip</label>
                        <BFormInput type="text" id="inputZip" />
                    </BCol>
                </BRow>

                <div class="mb-2">
                    <div class="form-check">
                        <input type="checkbox" class="form-check-input" id="customCheck11">
                        <label class="form-check-label" for="customCheck11">Check this custom checkbox</label>
                    </div>
                </div>

                <button type="submit" class="btn btn-primary">Sign in</button>
            </form>
        </BCardBody>
    </BCard>
</template>

<script setup lang="ts">
import { BCard, BCardBody, BCardHeader, BCol, BFormInput, BFormSelect, BRow } from 'bootstrap-vue-next';


</script>

<style scoped></style>