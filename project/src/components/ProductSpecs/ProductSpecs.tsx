import React from 'react';
import { ProductSpecs as ProductSpecsType } from '../../types/product';

interface ProductSpecsProps {
  specs: ProductSpecsType;
}

export default function ProductSpecs({ specs }: ProductSpecsProps) {
  return (
    <div className="bg-gray-50 rounded-lg p-4">
      <h3 className="text-lg font-semibold mb-3">Technical Specifications</h3>
      <dl className="grid grid-cols-2 gap-3">
        <div>
          <dt className="text-gray-600 text-sm">Size</dt>
          <dd className="font-medium">{specs.size}</dd>
        </div>
        <div>
          <dt className="text-gray-600 text-sm">Weight</dt>
          <dd className="font-medium">{specs.weight}</dd>
        </div>
        <div>
          <dt className="text-gray-600 text-sm">Mechanism</dt>
          <dd className="font-medium">{specs.mechanism}</dd>
        </div>
        <div>
          <dt className="text-gray-600 text-sm">Corner Cutting</dt>
          <dd className="font-medium">{specs.cornerCutting}</dd>
        </div>
        <div>
          <dt className="text-gray-600 text-sm">Difficulty</dt>
          <dd className="font-medium">{specs.difficulty}</dd>
        </div>
        <div>
          <dt className="text-gray-600 text-sm">Magnetized</dt>
          <dd className="font-medium">{specs.magnetized ? 'Yes' : 'No'}</dd>
        </div>
        {specs.wcaApproved && (
          <div className="col-span-2">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
              WCA Competition Approved
            </span>
          </div>
        )}
      </dl>
    </div>
  );
}