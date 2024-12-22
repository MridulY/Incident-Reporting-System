import React from "react";
import { MapPin, Clock, Shield, Tag } from "lucide-react";

export default function IncidentCard({ incident }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="flex justify-between items-start">
        <h3 className="text-lg font-semibold text-gray-900">
          {incident.title}
        </h3>
        <span
          className={`px-3 py-1 rounded-full text-sm ${
            incident.status === "verified"
              ? "bg-green-100 text-green-800"
              : incident.status === "rejected"
              ? "bg-red-100 text-red-800"
              : "bg-yellow-100 text-yellow-800"
          }`}
        >
          {incident.status.charAt(0).toUpperCase() + incident.status.slice(1)}
        </span>
      </div>

      <p className="mt-2 text-gray-600 line-clamp-2">{incident.description}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {incident.tags.map((tag) => (
          <span
            key={tag}
            className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
          >
            <Tag className="w-3 h-3 mr-1" />
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-4 flex items-center justify-between text-sm text-gray-500">
        <div className="flex items-center">
          <MapPin className="w-4 h-4 mr-1" />
          <span>{incident.location.address}</span>
        </div>
        <div className="flex items-center">
          <Clock className="w-4 h-4 mr-1" />
          <span>{new Date(incident.dateReported).toLocaleDateString()}</span>
        </div>
        <div className="flex items-center">
          <Shield className="w-4 h-4 mr-1" />
          <span>{incident.verifications.length} verifications</span>
        </div>
      </div>
    </div>
  );
}
