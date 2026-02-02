<template>
    <BCard no-body class="mt-4">
        <BCardHeader>
            <h4 class="card-title">Basic Example</h4>
        </BCardHeader>
        <BCardBody>
            <BForm>
                <BFormGroup label="Email address" label-for="exampleEmail" class="mb-3">
                    <BFormInput id="exampleEmail" type="email" placeholder="Enter email" />
                    <small class="form-text text-muted">We'll never share your email with anyone
                        else.</small>
                </BFormGroup>

                <BFormGroup label="Password" label-for="examplePassword" class="mb-3">
                    <BFormInput id="examplePassword" type="password" placeholder="Password" />
                </BFormGroup>

                <BFormCheckbox id="exampleCheck" class="mb-3">Check me out !</BFormCheckbox>
                <BButton type="submit" variant="primary">Submit</BButton>
            </BForm>
        </BCardBody>
    </BCard>
</template>

<script setup lang="ts">

</script>

<style scoped></style>