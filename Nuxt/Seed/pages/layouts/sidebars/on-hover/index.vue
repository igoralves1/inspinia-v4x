<template>
  <BContainer fluid>
    <PageBreadcrumb title="On Hover Sidebar"/>

    <BRow>
      <BCol cols="12">
        <BAlert
            show variant="info"
            class="alert-bordered border-start border-info"
            body-class="d-flex align-items-center gap-2"
        >
          <Icon name="tabler:info-circle" class="fs-xxl"/>
          <div>
            To enable the icon view menu with full menu on hover, add
            <code>data-sidenav-size="on-hover"</code> to the
            <code>&lt;html&gt;</code> tag. To apply this dynamically, use
            <code>setSideNavSize('on-hover')</code> from the <code>useLayout</code>.
          </div>
        </BAlert>
      </BCol>
    </BRow>

  </BContainer>
</template>

<script setup lang="ts">
const {setSideNavSize, reset} = useLayout();

usePageTitle('On Hover Sidebar')

onMounted(() => {
  setSideNavSize('on-hover')
});

onBeforeUnmount(() => {
  reset();
});
</script>