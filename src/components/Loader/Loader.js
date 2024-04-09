import React from 'react';
import "./Loader.css";

export const Loader = () => {
    return (
        <div className="loading">
            <div className="loading-container">
                <div className="loading-flex">
                    <div className="loading-border">
                        <h3>درحال پردازش... </h3>
                        <div class="loader"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
