<template>
    <BCard no-body>
        <BCardHeader>
            <h4 class="card-title">Inline Form</h4>
        </BCardHeader>

        <BCardBody>
            <form class="row row-cols-lg-auto g-3 align-items-center">
                <BCol cols="12">
                    <label for="staticEmail2" class="visually-hidden">Email</label>
                    <input type="text" class="form-control-plaintext" id="staticEmail2" value="email@example.com"
                        readonly>
                </BCol>
                <BCol cols="12">
                    <label for="inputPassword2" class="visually-hidden">Password</label>
                    <input type="password" class="form-control" id="inputPassword2" placeholder="Password">
                </BCol>
                <BCol cols="12">
                    <button type="submit" class="btn btn-primary">Confirm identity</button>
                </BCol>
            </form>

            <h6 class="fs-base mt-3">Auto-sizing</h6>
            <form>
                <BRow class="gy-2 gx-2 align-items-center">
                    <div class="col-auto">
                        <label class="visually-hidden" for="inlineFormInput">Name</label>
                        <input type="text" class="form-control mb-2" id="inlineFormInput" placeholder="Jane Doe">
                    </div>
                    <div class="col-auto">
                        <label class="visually-hidden" for="inlineFormInputGroup">Username</label>
                        <div class="input-group mb-2">
                            <div class="input-group-text">@</div>
                            <input type="text" class="form-control" id="inlineFormInputGroup" placeholder="Username">
                        </div>
                    </div>
                    <div class="col-auto">
                        <div class="form-check mb-2">
                            <input type="checkbox" class="form-check-input" id="autoSizingCheck">
                            <label class="form-check-label" for="autoSizingCheck">Remember me</label>
                        </div>
                    </div>
                    <div class="col-auto">
                        <button type="submit" class="btn btn-primary mb-2">Submit</button>
                    </div>
                </BRow>
            </form>
        </BCardBody>
    </BCard>
</template>

<script setup lang="ts">
import { BCard, BCol, BRow } from 'bootstrap-vue-next';


</script>

<style scoped></style>