<template>
    <BCard no-body class="mt-4">
        <BCardHeader>
            <h4 class="card-title">Horizontal Form</h4>
        </BCardHeader>
        <BCardBody>
            <BForm class="form-horizontal">
                <BRow class="mb-3">
                    <label for="inputEmail3" class="col-3 col-form-label">Email</label>
                    <BCol cols="9">
                        <BFormInput id="inputEmail3" type="email" placeholder="Email" />
                    </BCol>
                </BRow>
                <BRow class="mb-3">
                    <label for="inputPassword3" class="col-3 col-form-label">Password</label>
                    <BCol cols="9">
                        <BFormInput id="inputPassword3" type="password" placeholder="Password" />
                    </BCol>
                </BRow>
                <BRow class="mb-3">
                    <label for="inputPassword5" class="col-3 col-form-label">Re Password</label>
                    <BCol cols="9">
                        <BFormInput id="inputPassword5" type="password" placeholder="Retype Password" />
                    </BCol>
                </BRow>
                <BRow class="mb-3 justify-content-end">
                    <BCol cols="9">
                        <BFormCheckbox id="checkmeout">Check me out!</BFormCheckbox>
                    </BCol>
                </BRow>
                <BRow class="justify-content-end">
                    <BCol cols="9">
                        <BButton type="submit" variant="info">Sign in</BButton>
                    </BCol>
                </BRow>
            </BForm>
        </BCardBody>
    </BCard>
</template>

<script setup lang="ts">

</script>

<style scoped></style>