<template>
    <div>
        <md-card md-with-hover>
            <md-ripple>
                <md-card-content class="second-footer">
                    <div class="md-layout md-gutter md-alignment-center">
                        <div class="md-layout-item md-medium-size-20 md-small-size-50 md-xsmall-size-100">
                            <router-link to="/"><h3>Dynamic Fragrance Wheel</h3></router-link>
                        </div>
                        <div class="md-layout-item md-medium-size-20 md-small-size-50 md-xsmall-size-100">
                            <router-link to="/"><h3>Notes</h3></router-link>
                        </div>
                        <div class="md-layout-item md-medium-size-20 md-small-size-50 md-xsmall-size-100">
                            <router-link to="/"><h3>Accords</h3></router-link>
                        </div>
                        <div class="md-layout-item md-medium-size-20 md-small-size-50 md-xsmall-size-100">
                            <router-link to="/memories"><h3>Memories</h3></router-link>
                        </div>
                        <div class="md-layout-item md-medium-size-20 md-small-size-50 md-xsmall-size-100">
                            <router-link to="/assistance"><h3>Assistance</h3></router-link>
                        </div>
                    </div>
                </md-card-content>
            </md-ripple>
        </md-card>
    </div>
</template>

<script>
    export default {
        name: "SecondFooter"
    }
</script>

<style scoped>

</style>