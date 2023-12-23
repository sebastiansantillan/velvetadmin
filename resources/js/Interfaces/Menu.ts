import type { Component } from 'vue'

export interface MenuItem {
    titulo : string,
    link : string,
    icon ?: Component,
    iconColor ?: string,
    subgroup ?: MenuItem[]
    subGroupOpen ?: boolean
 }