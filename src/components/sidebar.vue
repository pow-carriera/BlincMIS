<template>
    <aside :class="`${is_expanded ? 'is-expanded' : ''}`">
        <div class="menu-toggle-wrap">
            <button class="menu-toggle" @click="ToggleMenu">
                <span class="material-icons">arrow_forward</span>
            </button>
        </div>
        <router-link to="/" class="logo-css">
            <div class="material-icons">
                <img :src="logoURL" alt="Logo" />
            </div>
        </router-link>
        <br>
<br>
        <div class="menu">
            <router-link to="/index" class="button">
                <span class="material-icons">leaderboard
                </span>
                <span class="text">Dashboard</span>
            </router-link>
            <router-link to="/attendance" class="button">
                <span class="material-icons">calendar_month</span>
                <span class="text">Attendance</span>
            </router-link>
            <router-link to="/request" class="button">
                <span class="material-icons">mail</span>
                <span class="text">Requests</span>
            </router-link>
            <router-link to="/calendar" class="button">
                <span class="material-icons">calendar_month</span>
                <span class="text">Calendar</span>
            </router-link>
            <router-link to="/profile" class="button">
                <span class="material-icons">person</span>
                <span class="text">Profile</span>
            </router-link>
        </div>
        <br>

        <div class="flex"></div>

        <div class="menu">
            <router-link to="/about" class="button">
                <span class="text">About</span>
            </router-link>
            <router-link to="/login" class="button">
                <span class="material-icons">logout</span>
                <span class="text">Logout</span>
            </router-link>

        </div>
        
    </aside>
</template>
   
<script setup>
import { ref } from 'vue'
import logoURL from '../assets/BLINC-05-white.png'

const is_expanded = ref(localStorage.getItem("is_expanded") === "true")

const ToggleMenu = () => {
    is_expanded.value = !is_expanded.value
    localStorage.setItem("is_expanded", is_expanded.value)
}
</script>
   
<style lang="scss" scoped>
.logo-url{
text-decoration: none;
}
aside {
    box-shadow: 5px 0 5px -5fpx #333;
    border-radius: 0px 0px 0px 0px;
    display: flex;
    flex-direction: column;
    background: #4C519F;
    color: var(--light);
    width: calc(2rem + 32px);
    overflow: hidden;
    min-height: 100vh;
    padding: 1rem;
    transition: 0.2s ease-in-out;

    .flex {
        flex: 1 1 0%;
    }

    .material-icons {
        margin-bottom: 1rem;

        // display: flex;
        // justify-content: center;
        img {
            padding-left: 0;
            width: 10.5rem;
            color: #bbb;
        }
    }

    .menu-toggle-wrap {
        display: flex;
        justify-content: flex-end;
        margin-bottom: 1rem;
        top: 0;
        transition: 0.2s ease-in-out;

        .menu-toggle {
            transition: 0.2s ease-in-out;
            border: hidden;
            cursor: pointer;
            outline: none;
            background-color: #4c519f;


            .sidebar .closebtn {
                position: absolute;
                top: 0;
                right: 25px;
                font-size: 36px;
                margin-left: 50px;
            }

            .material-icons {
                font-size: 2rem;
                color: #fff;
                transition: 0.2s ease-out;
            }

            &:hover {
                .material-icons {
                    color: #fff;
                    transform: translateX(0.5rem);
                }
            }
        }
    }



    h3,
    .button .text {
        opacity: 0;

        transition: opacity 0.3s ease-in-out;
    }

    h3 {
        color: var(--grey);
        font-size: 0.875rem;
        margin-bottom: 0.5rem;
        text-transform: uppercase;
    }

    .menu {
        margin: 0 -1rem;

        .button {
            display: flex;
            align-items: center;
            text-decoration: none;
            transition: 0.2s ease-in-out;
            padding: 0.5rem 1rem;


            .material-icons {
                font-size: 2rem;
                color: #fff;
                transition: 0.2s ease-in-out;
            }

            .text {
                color: #fff;
                transition: 0.2s ease-in-out;
            }

            &:hover {
                background-color: var(--dark-alt);

                .material-icons,
                .text {
                    color: #fff;
                }
            }

            &.router-link-exact-active {
                background-color: var(--dark-alt);
                border-right: 5px solid var(--primary);

                .material-icons,
                .text {
                    color: var(--primary);
                }
            }
        }
    }

    a {
        box-shadow: inset 150 0 0 0 ;
        color:linear-gradient(90deg, rgba(221,76,121,0) 0%, rgba(221,76,121,0.5) 50%, rgba(221,76,121,1) 90%);
        color: #fff;
        padding: 0 .25rem;
        margin: 0 -.25rem;
        background: linear-gradient(90deg, rgba(221,76,121,0) 0%, rgba(221,76,121,0.5) 50%, rgba(221,76,121,1) 90%)var(--p,0)/var(--p,0) no-repeat;
        transition: .4s,background-position 0s;
        transition: color .3s ease-in-out, box-shadow .3s ease-in-out;
    }
    

    a:hover {
        color: #fff;
        box-shadow: inset -10px 0px 0px 0px #C183A0;
        --p: 80%;
    color: #fff;
    }

    .footer {
        opacity: 0;
        transition: opacity 0.3s ease-in-out;

        p {
            font-size: 0.875rem;
            color: var(--grey);
        }
    }

    &.is-expanded {
        // width: var(--sidebar-width);
        width: 13vw;

        .menu-toggle-wrap {

            top: -3rem;

            .menu-toggle {

                transform: rotate(-180deg);
                background-color: #4c519f;
            }
        }

        h3,
        .button .text {
            opacity: 1;

        }

        .button {
            .material-icons {
                margin-right: 1rem;

            }
        }

        .footer {
            opacity: 0;
        }
    }

    @media (max-width: 1024px) {
        position: absolute;
        z-index: 99;
    }
}</style>