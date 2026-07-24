'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Calendar, User, Phone, Mail, Clock, ShieldAlert, CheckCircle2 } from 'lucide-react';
import { Modal } from '@/components/ui/modal';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/components/ui/toast';
import { DEPARTMENTS, DOCTORS } from '@/constants/hospitalData';

const appointmentSchema = z.object({
  patientName: z.string().min(2, 'Patient name is required'),
  email: z.string().email('Valid email is required'),
  phone: z.string().min(8, 'Phone number must be at least 8 digits'),
  department: z.string().min(1, 'Please select a department'),
  doctor: z.string().optional(),
  preferredDate: z.string().min(1, 'Preferred date is required'),
  preferredTime: z.string().min(1, 'Preferred time is required'),
  notes: z.string().optional(),
  urgency: z.enum(['routine', 'urgent', 'emergency']),
});

type AppointmentFormValues = z.infer<typeof appointmentSchema>;

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultDepartment?: string;
  defaultDoctor?: string;
}

export function AppointmentModal({
  isOpen,
  onClose,
  defaultDepartment,
  defaultDoctor,
}: AppointmentModalProps) {
  const { showToast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    watch,
    formState: { errors },
  } = useForm<AppointmentFormValues>({
    resolver: zodResolver(appointmentSchema),
    defaultValues: {
      department: defaultDepartment || '',
      doctor: defaultDoctor || '',
      urgency: 'routine',
      preferredDate: new Date().toISOString().split('T')[0],
      preferredTime: '10:00 AM',
    },
  });

  const selectedDepartment = watch('department');

  // Filter doctors based on selected department
  const availableDoctors = selectedDepartment
    ? DOCTORS.filter((d) => d.departmentId === selectedDepartment)
    : DOCTORS;

  const onSubmit = async (data: AppointmentFormValues) => {
    setIsSubmitting(true);
    // Simulate server submission
    await new Promise((resolve) => setTimeout(resolve, 1400));
    setIsSubmitting(false);

    showToast(
      `Appointment request submitted for ${data.patientName}! Confirmation sent to ${data.email}.`,
      'success'
    );
    reset();
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Book a Medical Consultation"
      description="Schedule an in-person or telehealth appointment with our board-certified specialists."
    >
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 pt-2">
        {/* Patient Name */}
        <div>
          <label className="block text-xs font-bold text-slate-700 mb-1">Full Patient Name *</label>
          <div className="relative">
            <input
              {...register('patientName')}
              type="text"
              placeholder="e.g. Eleanor Vance"
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-maroon-600"
            />
            <User className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
          </div>
          {errors.patientName && (
            <p className="text-xs text-rose-500 mt-1 font-medium">{errors.patientName.message}</p>
          )}
        </div>

        {/* Contact Email & Phone */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">Email Address *</label>
            <div className="relative">
              <input
                {...register('email')}
                type="email"
                placeholder="dr.hjsoni@gmail.com"
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-maroon-600"
              />
              <Mail className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
            </div>
            {errors.email && (
              <p className="text-xs text-rose-500 mt-1 font-medium">{errors.email.message}</p>
            )}
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">Phone Number *</label>
            <div className="relative">
              <input
                {...register('phone')}
                type="tel"
                placeholder="+91 7574840735 ,9737290729"
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-maroon-600"
              />
              <Phone className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
            </div>
            {errors.phone && (
              <p className="text-xs text-rose-500 mt-1 font-medium">{errors.phone.message}</p>
            )}
          </div>
        </div>

        {/* Department & Doctor Select */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">Department Wing *</label>
            <select
              {...register('department')}
              className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-maroon-600 bg-white"
            >
              <option value="">-- Select Department --</option>
              {DEPARTMENTS.map((dept) => (
                <option key={dept.id} value={dept.id}>
                  {dept.name}
                </option>
              ))}
            </select>
            {errors.department && (
              <p className="text-xs text-rose-500 mt-1 font-medium">{errors.department.message}</p>
            )}
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">Preferred Doctor (Optional)</label>
            <select
              {...register('doctor')}
              className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-maroon-600 bg-white"
            >
              <option value="">Any Available Specialist</option>
              {availableDoctors.map((doc) => (
                <option key={doc.id} value={doc.id}>
                  {doc.name} ({doc.departmentName})
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Date & Time Select */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">Preferred Date *</label>
            <div className="relative">
              <input
                {...register('preferredDate')}
                type="date"
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-maroon-600"
              />
              <Calendar className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
            </div>
            {errors.preferredDate && (
              <p className="text-xs text-rose-500 mt-1 font-medium">{errors.preferredDate.message}</p>
            )}
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">Preferred Time Slot *</label>
            <div className="relative">
              <select
                {...register('preferredTime')}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-maroon-600 bg-white"
              >
                <option value="09:00 AM">Morning: 09:00 AM</option>
                <option value="11:00 AM">Morning: 11:00 AM</option>
                <option value="02:00 PM">Afternoon: 02:00 PM</option>
                <option value="04:00 PM">Afternoon: 04:00 PM</option>
                <option value="06:00 PM">Evening: 06:00 PM</option>
              </select>
              <Clock className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
            </div>
          </div>
        </div>

        {/* Notes */}
        <div>
          <label className="block text-xs font-bold text-slate-700 mb-1">Medical Symptoms / Notes (Optional)</label>
          <textarea
            {...register('notes')}
            rows={2}
            placeholder="Briefly describe your symptoms or reason for visit..."
            className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-maroon-600 resize-none"
          />
        </div>

        {/* Action Buttons */}
        <div className="pt-4 flex items-center justify-end space-x-3 border-t border-slate-100">
          <Button variant="ghost" size="md" onClick={onClose}>
            Cancel
          </Button>

          <Button
            type="submit"
            variant="primary"
            size="md"
            isLoading={isSubmitting}
            leftIcon={<Calendar className="h-4 w-4" />}
          >
            Confirm Appointment
          </Button>
        </div>
      </form>
    </Modal>
  );
}
