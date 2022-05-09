import React from "react";
import {MdLocationOn} from "react-icons/md"

export default function Card(props) {
    return (
        <div className="card">
            <img src={props.item.imageUrl} className="card--img" />
            <div className="card--info">
                <div className="card--location">
                    <span className="location--icon"><MdLocationOn size={20} /></span>
                    <p className="location--info">{props.item.location.toUpperCase()}</p>
                    <a href={props.item.googleMapsUrl} className="location--link">View on Google Maps</a>
                </div>
                <h1 className="info--title">{props.item.title}</h1>
                <h3 className="info--dates">{props.item.startDate} - {props.item.endDate}</h3>
                <p className="info--desc">{props.item.description}</p>
            </div>
        </div>
    )
}