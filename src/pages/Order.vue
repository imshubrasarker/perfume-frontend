<template>
    <div>
        <div class="content">
            <div class="md-layout">
                <div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-50">
                    <form>
                        <md-card>
                            <md-card-header data-background-color="purple">
                                <h4 class="title title-center">New Client</h4>
                                <p class="category title-center">Create New Order</p>
                            </md-card-header>

                            <md-card-content>
                                <div class="md-layout">
                                    <div class="md-layout-item md-small-size-100 md-size-50">
                                        <md-field>
                                            <label>First Name</label>
                                            <md-input v-model="firstname" type="text"></md-input>
                                        </md-field>
                                    </div>
                                    <div class="md-layout-item md-small-size-100 md-size-50">
                                        <md-field>
                                            <label>Last Name</label>
                                            <md-input v-model="lastname" type="text"></md-input>
                                        </md-field>
                                    </div>
                                    <div class="md-layout-item md-small-size-100 md-size-50">
                                        <md-field>
                                            <label>Telephone</label>
                                            <md-input v-model="telephone" type="text"></md-input>
                                        </md-field>
                                    </div>
                                    <div class="md-layout-item md-small-size-100 md-size-50">
                                        <md-field>
                                            <label>Mobile</label>
                                            <md-input v-model="mobile" type="text"></md-input>
                                        </md-field>
                                    </div>
                                    <div class="md-layout-item md-small-size-100 md-size-100">
                                        <md-field>
                                            <label>Adress</label>
                                            <md-input v-model="address" type="text"></md-input>
                                        </md-field>
                                    </div>
                                </div>
                            </md-card-content>
                        </md-card>
                    </form>
                </div>
                <div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-50">
                    <md-card>
                        <md-card-header data-background-color="orange">
                            <h4 class="title title-center">Customer Profile</h4>
                        </md-card-header>
                        <md-card-content class="customer-profile-table">
                            <md-table v-model="users" md-card>
                                <md-table-row slot="md-table-row" slot-scope="{ item }">
                                    <md-table-cell md-label="Lorum" md-sort-by="email">{{ item.email }}</md-table-cell>
                                    <md-table-cell md-label="Ipsum" md-sort-by="title">{{ item.title }}</md-table-cell>
                                </md-table-row>
                            </md-table>
                        </md-card-content>
                    </md-card>
                </div>
            </div>

            <div class="md-layout" v-if="hideModalSection">
                <div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100">
                    <md-card>
                        <md-card-header data-background-color="blue">
                            <h4 class="title title-center">New Recipe</h4>
                        </md-card-header>
                        <md-card-content>
                            <md-dialog :md-active.sync="showDialog">
                                <md-dialog-title>What Kind of Fragrances Are You Into ? </md-dialog-title>
                                <div class="md-layout" style="margin: auto">
                                    <div class="md-layout-item">
                                        Soft
                                        <hr class="new-1">
                                    </div>
                                    <div class="md-layout-item">
                                        Intense
                                        <hr class="new-2">
                                    </div>
                                    <div class="md-layout-item">
                                        Whatever
                                        <hr class="new-3">
                                    </div>
                                </div>
                                <div class="modal-link" style="overflow: hidden">
                                    <router-link @click.native="hideModal()" to="" style="float: left; margin-left: 15px" href="" class="btn btn-primary">Run Prediction</router-link>
                                    <router-link to="/recommendation-result" style="float: right; margin-right: 15px" href="" class="btn btn-primary">Run Recommendations</router-link>
                                </div>
                                <div class="modal-close-button">
                                    <md-dialog-actions>
                                        <md-button class="md-primary modal-close-button" @click="showDialog = false">Close</md-button>
                                    </md-dialog-actions>
                                </div>
                            </md-dialog>
                            <md-button class="md-primary md-raised" @click="showDialog = true">Artificial Intelligence</md-button>
                        </md-card-content>
                    </md-card>
                </div>
            </div>

            <div class="md-layout">
                <div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100" v-if="isHidden">
                    <md-card>
                        <md-card-header data-background-color="purple">
                            <h4 class="title title-center">New Recipe</h4>
                        </md-card-header>
                        <md-card-content>
                            <div class="md-layout">
                                <div class="md-layout-item notes-layouts">
                                    <div>
                                        <h4 style="text-align: center">Notes</h4>
                                    </div>
                                    <div class="md-layout md-gutter">
                                        <div class="md-layout-item">
                                            <div class="left-side-div">
                                                <md-avatar class="md-avatar-icon-notes">
                                                    <img class="left-side-perfume-notes" src="/img/marc.aba54d65.jpg" alt="">
                                                </md-avatar>
                                                <span class="left-perfume-name-notes">Perfume</span>
                                            </div>
                                            <div class="left-side-div">
                                                <md-avatar class="md-avatar-icon-notes">
                                                    <img class="left-side-perfume-notes" src="/img/marc.aba54d65.jpg" alt="">
                                                </md-avatar>
                                                <span class="left-perfume-name-notes">Perfume</span>
                                            </div>
                                            <div class="left-side-div">
                                                <md-avatar class="md-avatar-icon-notes">
                                                    <img class="left-side-perfume-notes" src="/img/marc.aba54d65.jpg" alt="">
                                                </md-avatar>
                                                <span class="left-perfume-name-notes">Perfume</span>
                                            </div>
                                            <div class="left-side-div">
                                                <md-avatar class="md-avatar-icon-notes">
                                                    <img class="left-side-perfume-notes" src="/img/marc.aba54d65.jpg" alt="">
                                                </md-avatar>
                                                <span class="left-perfume-name-notes">Perfume</span>
                                            </div>
                                            <div class="left-side-div">
                                                <md-avatar class="md-avatar-icon-notes">
                                                    <img class="left-side-perfume-notes" src="/img/marc.aba54d65.jpg" alt="">
                                                </md-avatar>
                                                <span class="left-perfume-name-notes">Perfume</span>
                                            </div>
                                        </div>
                                        <div class="md-layout-item">
                                            <div class="right-side-div">
                                                <md-avatar class="md-avatar-icon-notes">
                                                    <img class="left-side-perfume-notes" src="/img/marc.aba54d65.jpg" alt="">
                                                </md-avatar>
                                                <span class="left-perfume-name-notes">Perfume</span>
                                            </div>
                                            <div class="right-side-div">
                                                <md-avatar class="md-avatar-icon-notes">
                                                    <img class="left-side-perfume-notes" src="/img/marc.aba54d65.jpg" alt="">
                                                </md-avatar>
                                                <span class="left-perfume-name-notes">Perfume</span>
                                            </div>
                                            <div class="right-side-div">
                                                <md-avatar class="md-avatar-icon-notes">
                                                    <img class="left-side-perfume-notes" src="/img/marc.aba54d65.jpg" alt="">
                                                </md-avatar>
                                                <span class="left-perfume-name-notes">Perfume</span>
                                            </div>
                                            <div class="right-side-div">
                                                <md-avatar class="md-avatar-icon-notes">
                                                    <img class="left-side-perfume-notes" src="/img/marc.aba54d65.jpg" alt="">
                                                </md-avatar>
                                                <span class="left-perfume-name-notes">Perfume</span>
                                            </div>
                                            <div class="right-side-div">
                                                <md-avatar class="md-avatar-icon-notes">
                                                    <img class="left-side-perfume-notes" src="/img/marc.aba54d65.jpg" alt="">
                                                </md-avatar>
                                                <span class="left-perfume-name-notes">Perfume</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="md-layout-item">

                                </div>
                                <div class="md-layout-item accords-layout">
                                    <div>
                                        <h4 style="text-align: center">Accords</h4>
                                    </div>
                                    <div class="md-layout md-gutter">
                                        <div class="md-layout-item">
                                            <div class="left-side-div">
                                                <div class="avatar-wrapper">
                                                    <md-avatar class="md-avatar-icon-accords">
                                                        <img class="left-side-perfume-notes" src="/img/marc.aba54d65.jpg" alt="">
                                                    </md-avatar>
                                                    <md-avatar class="md-avatar-icon-notes left-side-perfume-overlap">
                                                        <img src="/img/marc.aba54d65.jpg" alt="">
                                                    </md-avatar>
                                                    <md-avatar class="md-avatar-icon-notes">
                                                        <!--                                                    <img src="/img/marc.aba54d65.jpg" alt="">-->
                                                    </md-avatar>
                                                    <span class="left-perfume-name-accords">Perfume + Perfume + Perfume</span>
                                                </div>
                                            </div>
                                            <div class="left-side-div">
                                                <div class="avatar-wrapper">
                                                    <md-avatar class="md-avatar-icon-accords">
                                                        <img class="left-side-perfume-notes" src="/img/marc.aba54d65.jpg" alt="">
                                                    </md-avatar>
                                                    <md-avatar class="md-avatar-icon-notes left-side-perfume-overlap">
                                                        <img src="/img/marc.aba54d65.jpg" alt="">
                                                    </md-avatar>
                                                    <md-avatar class="md-avatar-icon-notes">
                                                        <!--                                                    <img src="/img/marc.aba54d65.jpg" alt="">-->
                                                    </md-avatar>
                                                    <span class="left-perfume-name-accords">Perfume + Perfume</span>
                                                </div>
                                            </div>
                                            <div class="left-side-div">
                                                <div class="avatar-wrapper">
                                                    <md-avatar class="md-avatar-icon-accords">
                                                        <img class="left-side-perfume-notes" src="/img/marc.aba54d65.jpg" alt="">
                                                    </md-avatar>
                                                    <md-avatar class="md-avatar-icon-notes left-side-perfume-overlap">
                                                        <img src="/img/marc.aba54d65.jpg" alt="">
                                                    </md-avatar>
                                                    <md-avatar class="md-avatar-icon-notes">
                                                        <!--                                                    <img src="/img/marc.aba54d65.jpg" alt="">-->
                                                    </md-avatar>
                                                    <span class="left-perfume-name-accords">Perfume + Perfume</span>
                                                </div>
                                            </div>
                                            <div class="left-side-div">
                                                <div class="avatar-wrapper">
                                                    <md-avatar class="md-avatar-icon-accords">
                                                        <img class="left-side-perfume-notes" src="/img/marc.aba54d65.jpg" alt="">
                                                    </md-avatar>
                                                    <md-avatar class="md-avatar-icon-notes left-side-perfume-overlap">
                                                        <img src="/img/marc.aba54d65.jpg" alt="">
                                                    </md-avatar>
                                                    <md-avatar class="md-avatar-icon-notes">
                                                        <!--                                                    <img src="/img/marc.aba54d65.jpg" alt="">-->
                                                    </md-avatar>
                                                    <span class="left-perfume-name-accords">Perfume + Perfume</span>
                                                </div>
                                            </div>
                                            <div class="left-side-div">
                                                <div class="avatar-wrapper">
                                                    <md-avatar class="md-avatar-icon-accords">
                                                        <img src="/img/marc.aba54d65.jpg" alt="">
                                                    </md-avatar>
                                                    <md-avatar class="md-avatar-icon-notes left-side-perfume-overlap">
                                                        <img src="/img/marc.aba54d65.jpg" alt="">
                                                    </md-avatar>
                                                    <md-avatar class="md-avatar-icon-notes">
                                                        <img src="/img/marc.aba54d65.jpg" alt="">
                                                    </md-avatar>
                                                    <span class="left-perfume-name-accords">Perfume + Perfume + Perfume</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </md-card-content>
                    </md-card>
                </div>
            </div>
        </div>
        <SecondFooter></SecondFooter>
    </div>
</template>

<script>
    import SecondFooter from "./Layout/SecondFooter";
    export default {
        name: "Order",
        components: {
          SecondFooter
        },
        props: {
            dataBackgroundColor: {
                type: String,
                default: ""
            },
            cardUserImage: {
                type: String,
                default: require("@/assets/img/faces/marc.jpg")
            }
        },
        data() {
            return {
                hideModalSection:true,
                isHidden: false,
                showDialog: false,
                telephone: null,
                mobile: null,
                lastname: null,
                firstname: null,
                address: null,
                users: [
                    {
                        email: 'odemageard1@spotify.com',
                        title: 'Account Coordinator'
                    },
                    {
                        email: 'lizkovitz3@youtu.be',
                        title: 'Operator'
                    },
                    {
                        email: 'tstave4@reference.com',
                        title: 'Software Test Engineer III'
                    },
                    {
                        email: 'cmarietonh@theatlantic.com',
                        title: 'Paralegal'
                    }
                ]
            };
        },
        methods: {
            hideModal() {
                this.isHidden = true;
                this.showDialog = false;
                this.hideModalSection = false;
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>