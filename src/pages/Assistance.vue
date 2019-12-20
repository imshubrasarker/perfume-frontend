<template>
    <div>
        <div class="content">
            <div class="md-layout">
                <div class="md-layout-item md-medium-size-100 md-size-66 assistance-content">
                    <form class="text-center">
                        <md-card>
                            <md-card-header data-background-color="orange">
                                <h4 class="title">Support</h4>
                            </md-card-header>

                            <md-card-content>
                                <div class="md-layout">
                                    <div class="md-layout-item md-small-size-100 md-size-100">
                                        <md-field>
                                            <label>Title</label>
                                            <md-input v-model="title" type="text"></md-input>
                                        </md-field>
                                    </div>
                                    <div class="md-layout-item md-small-size-100 md-size-100">
                                        <md-field>
                                            <label>In Which are Would You to have Support You ?</label>
                                            <md-input v-model="area" type="email"></md-input>
                                        </md-field>
                                    </div>
                                    <div class="md-layout-item md-small-size-100 md-size-100">
                                        <md-field>
                                            <label>What seems to the Problem ? </label>
                                            <md-input v-model="problem" type="text"></md-input>
                                        </md-field>
                                    </div>
                                    <div class="md-layout-item md-small-size-100 md-size-100">
                                        <md-field>
                                            <label>Attachment File</label>
                                            <md-input v-model="files" type="text"></md-input>
                                        </md-field>
                                    </div>
                                    <div class="md-layout-item md-size-100 text-center">
                                        <md-button class="md-raised md-success">Send</md-button>
                                    </div>
                                </div>
                            </md-card-content>
                        </md-card>
                    </form>
                </div>
            </div>
        </div>
        <second-footer></second-footer>
    </div>
</template>

<script>
    import SecondFooter from "./Layout/SecondFooter";
    export default {
        name: "Assistance",
        components: {
            SecondFooter
        },
        data() {
            return {
                title: null,
                area: null,
                problem: null,
                files: null
            };
        }
    }
</script>

<style scoped>

</style>