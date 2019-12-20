<template>
    <div class="md-layout">
        <div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100">
            <md-card>
                <md-card-header data-background-color="purple">
                    <h4 class="title title-center">Tutorial</h4>
                </md-card-header>

                <md-card-content>
                    <h4 class="text-warning"><b>Dynamically change video source</b></h4>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                    </p>
                    <div class="text-center tutorial-video">
                        <video ref="videoRef" :src="src" id="video-container1" width="50%" controls></video>
                    </div>
                </md-card-content>
                <md-card-content>
                    <h4 class="text-warning"><b>Dynamically change video source</b></h4>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                    </p>
                    <div class="text-center tutorial-video">
                        <video ref="videoRef" :src="src" id="video-container2" width="50%" controls></video>
                    </div>
                </md-card-content>
                <md-card-content>
                    <h4 class="text-warning"><b>Dynamically change video source</b></h4>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                    </p>
                    <div class="text-center tutorial-video">
                        <video style="margin: auto" ref="videoRef" :src="src" id="video-container3" width="50%" controls></video>
                    </div>
                </md-card-content>
                <md-card-content>
                    <h4 class="text-warning"><b>Dynamically change video source</b></h4>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                    </p>
                    <div class="text-center tutorial-video">
                        <video ref="videoRef" :src="src" id="video-container4" width="50%" controls></video>
                    </div>
                </md-card-content>
            </md-card>
        </div>
    </div>
</template>

<script>

    export default {
        data() {
            return {
                src:
                    "https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4",
                new_src: ""
            };
        },
        methods: {
            changeSrc() {
                this.src = this.new_src;
                this.new_src = "";
            }
        }
    };
</script>

<style>
    #app {
        font-family: "Avenir", Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
    input {
        width: 60%;
        height: 40px;
        font-size: 16px;
    }
</style>