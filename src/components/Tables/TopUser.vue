<template>

    <div>
        <md-table v-model="users" :table-header-color="tableHeaderColor">
            <md-table-row slot="md-table-row" slot-scope="{ item }">
                <md-table-cell md-label="User">{{ item.user }}</md-table-cell>
                <md-table-cell md-label="Date">{{ item.date }}</md-table-cell>
                <md-table-cell md-label="Comment">{{ item.comment }}</md-table-cell>
                <md-table-cell md-label="Email">{{ item.email  }}</md-table-cell>
            </md-table-row>
        </md-table>
    </div>
    
</template>

<script>
    export default {
        name: "TopUser",
        props: {
            tableHeaderColor: {
                type: String,
                default: ""
            }
        },
        data() {
            return {
                selected: [],
                users: [
                    {
                        user: "Dakota Rice",
                        date: "19/12/2019",
                        comment: "Lorem Ipsum",
                        email: 'lorem@email.com'
                    },
                    {
                        user: "Minerva Hooper",
                        date: "19/12/2019",
                        comment: "Lorem Ipsum",
                        email: 'lorem@email.com'
                    },
                    {
                        user: "Sage Rodriguez",
                        date: "19/12/2019",
                        comment: "Lorem Ipsum",
                        email: 'lorem@email.com'
                    }
                ]
            };
        }
    }
</script>

<style scoped>

</style>