/**
 * Simple performance monitoring utility
 * This helps track performance metrics in the application
 */

// Interface for performance metrics
export interface PerformanceMetric {
  name: string;
  startTime: number;
  duration?: number;
  metadata?: Record<string, any>;
}

// Class to manage performance monitoring
export class PerformanceMonitor {
  private static instance: PerformanceMonitor;
  private metrics: PerformanceMetric[] = [];
  private enabled: boolean =
    process.env.NODE_ENV !== 'production' || process.env.NEXT_PUBLIC_ENABLE_MONITORING === 'true';

  private constructor() {}

  // Singleton pattern
  public static getInstance(): PerformanceMonitor {
    if (!PerformanceMonitor.instance) {
      PerformanceMonitor.instance = new PerformanceMonitor();
    }
    return PerformanceMonitor.instance;
  }

  // Start timing a specific operation
  public startMeasure(name: string, metadata?: Record<string, any>): string {
    if (!this.enabled) return name;

    const id = `${name}-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;
    this.metrics.push({
      name: id,
      startTime: performance.now(),
      metadata,
    });
    return id;
  }

  // End timing for an operation
  public endMeasure(id: string): PerformanceMetric | undefined {
    if (!this.enabled) return;

    const index = this.metrics.findIndex(metric => metric.name === id);
    if (index !== -1) {
      const metric = this.metrics[index];
      metric.duration = performance.now() - metric.startTime;

      // Log in development
      if (process.env.NODE_ENV !== 'production') {
        console.log(
          `Performance: ${id} took ${metric.duration.toFixed(2)}ms`,
          metric.metadata || ''
        );
      }

      // In a real app, you might want to send this to an analytics service
      this.reportMetricIfNeeded(metric);

      return metric;
    }
    return undefined;
  }

  // Get all recorded metrics
  public getMetrics(): PerformanceMetric[] {
    return [...this.metrics];
  }

  // Clear all metrics
  public clearMetrics(): void {
    this.metrics = [];
  }

  // Report metric to an analytics service if needed
  private reportMetricIfNeeded(metric: PerformanceMetric): void {
    // In a production app, you would send this to your analytics service
    // Example: if (process.env.NODE_ENV === 'production') { sendToAnalytics(metric); }
  }
}

// Helper functions for easy use
export const startMeasure = (name: string, metadata?: Record<string, any>): string => {
  return PerformanceMonitor.getInstance().startMeasure(name, metadata);
};

export const endMeasure = (id: string): PerformanceMetric | undefined => {
  return PerformanceMonitor.getInstance().endMeasure(id);
};

// React hook for measuring component performance
export const usePerformanceMeasure = (componentName: string, metadata?: Record<string, any>) => {
  if (typeof window === 'undefined') return;

  const id = PerformanceMonitor.getInstance().startMeasure(`component-${componentName}`, {
    ...metadata,
    type: 'component-render',
  });

  // Clean up when component unmounts
  return () => {
    PerformanceMonitor.getInstance().endMeasure(id);
  };
};
